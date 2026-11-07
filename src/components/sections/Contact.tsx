"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { openWhatsApp } from "@/lib/whatsapp";
import { isValidPhone, formatPhone } from "@/lib/utils";

const services = [
  "Recursos de infrações",
  "Processos de habilitação",
  "Intermediação",
  "Outros",
];

interface FormState {
  name: string;
  phone: string;
  service: string;
  message: string;
}

interface Errors {
  name?: string;
  phone?: string;
  service?: string;
}

export function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function validate(): boolean {
    const e: Errors = {};
    if (!form.name.trim()) e.name = "Informe seu nome.";
    if (!isValidPhone(form.phone)) e.phone = "Informe um telefone válido.";
    if (!form.service) e.service = "Selecione um serviço.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    setLoading(true);
    const msg = `Olá, ORSINE!

Meu nome é ${form.name.trim()}.

Gostaria de informações sobre ${form.service}.

Telefone: ${form.phone}

Mensagem: ${form.message.trim() || "—"}`;

    setTimeout(() => {
      openWhatsApp(msg);
      setLoading(false);
      setSuccess(true);
      setForm({ name: "", phone: "", service: "", message: "" });
      setTimeout(() => setSuccess(false), 4000);
    }, 600);
  }

  return (
    <section id="contato" className="bg-surface py-20 sm:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Atendimento"
              title="Vamos conversar sobre sua necessidade?"
              description="Entre em contato com nossa equipe e receba informações sobre o atendimento adequado ao seu caso."
            />
            <p className="mt-6 text-sm text-text-muted leading-relaxed max-w-md">
              Preencha o formulário e você será direcionado ao WhatsApp com uma
              mensagem pronta. A equipe confirma o atendimento e os próximos
              passos.
            </p>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-white p-7 sm:p-9 shadow-[0_24px_60px_-30px_rgba(6,26,58,0.2)]"
            noValidate
          >
            <div className="grid gap-5">
              <div className="grid gap-2">
                <Label htmlFor="name">Nome</Label>
                <Input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Seu nome completo"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" role="alert" className="text-xs text-red-600">{errors.name}</p>
                )}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="phone">Telefone</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) =>
                    setForm({ ...form, phone: formatPhone(e.target.value) })
                  }
                  placeholder="(92) 99999-9999"
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                />
                {errors.phone && (
                  <p id="phone-error" role="alert" className="text-xs text-red-600">{errors.phone}</p>
                )}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="service">Serviço desejado</Label>
                <select
                  id="service"
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
                  aria-invalid={!!errors.service}
                  aria-describedby={errors.service ? "service-error" : undefined}
                >
                  <option value="">Selecione uma opção</option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p id="service-error" role="alert" className="mt-1.5 text-xs text-red-600">{errors.service}</p>
                )}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="message">Mensagem (opcional)</Label>
                <Textarea
                  id="message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={4}
                  placeholder="Conte brevemente sobre sua necessidade"
                />
              </div>

              <Button
                type="submit"
                variant="secondary"
                className="w-full justify-center py-3.5"
                disabled={loading}
              >
                {loading ? "Enviando..." : "Enviar solicitação"}
                <Send className="h-4 w-4" />
              </Button>

              {success && (
                <div role="status" className="flex items-center gap-2 rounded-xl bg-green-50 px-4 py-3 text-sm text-green-700">
                  <CheckCircle2 className="h-4 w-4" />
                  Solicitação enviada. Abrindo o WhatsApp...
                </div>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}