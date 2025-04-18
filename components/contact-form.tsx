"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import emailjs from '@emailjs/browser'
import { jwtDecode } from 'jwt-decode'

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    // @ts-ignore
    window.google?.accounts.id.initialize({
      client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      callback: (response: any) => {
        if (response.credential) {
          const decoded: any = jwtDecode(response.credential);
          setFormState(prev => ({
            ...prev,
            email: decoded.email
          }));
        }
      },
      auto_select: false
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      if (!formRef.current) return

      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )

      setIsSubmitted(true)
      setFormState({ name: "", email: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    } catch (err) {
      setError("메시지 전송에 실패했습니다. 다시 시도해주세요.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="backdrop-blur-md bg-background/50 border border-border/50 rounded-3xl p-8"
    >
      {isSubmitted ? (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center py-8">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Send className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-xl font-bold mb-2">메시지가 전송되었습니다!</h3>
          <p className="text-muted-foreground">최대한 빠르게 답변 드리도록 하겠습니다.</p>
        </motion.div>
      ) : (
        <form 
          ref={formRef} 
          onSubmit={handleSubmit} 
          className="space-y-6"
          aria-label="Contact form"
        >
          {error && (
            <div 
              className="p-4 text-sm text-red-500 bg-red-50 rounded-lg"
              role="alert"
              aria-live="assertive"
            >
              {error}
            </div>
          )}
          
          <div className="space-y-2">
            <Label htmlFor="name" className="sr-only">제목</Label>
            <Input
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              placeholder="제목을 입력해주세요"
              required
              className="backdrop-blur-md bg-background/30 border-border/50"
              aria-invalid={error ? "true" : "false"}
              aria-describedby={error ? "error-message" : undefined}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="sr-only">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
              placeholder="이메일 주소를 입력해주세요"
              required
              className="backdrop-blur-md bg-background/30 border-border/50"
              aria-invalid={error ? "true" : "false"}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="sr-only">Message</Label>
            <Textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              placeholder="메시지를 입력해주세요"
              required
              className="min-h-[120px] backdrop-blur-md bg-background/30 border-border/50"
              aria-invalid={error ? "true" : "false"}
            />
          </div>

          <div className="space-y-4">
            <Button 
              type="submit" 
              className="w-full rounded-full" 
              disabled={isSubmitting}
              aria-busy={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  전송 중...
                </span>
              ) : (
                <span className="flex items-center">
                  메시지 보내기
                  <Send className="ml-2 h-4 w-4" />
                </span>
              )}
            </Button>

          </div>
        </form>
      )}
    </motion.div>
  )
}

