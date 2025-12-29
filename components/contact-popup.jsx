"use client";
import {
  Credenza,
  CredenzaBody,
  CredenzaContent,
  CredenzaDescription,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaTrigger,
} from "@/components/ui/credenza";
import { Button } from "./ui/button";
import { LucideExternalLink } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/constants";

export default function ContactPopup({ children }) {
  return (
    <Credenza>
      <CredenzaTrigger asChild>{children}</CredenzaTrigger>
      <CredenzaContent>
        <CredenzaHeader>
          <CredenzaTitle>Contact Me</CredenzaTitle>
          <CredenzaDescription>
            Don't hesitate to reach out if you have something interesting or
            just want to say hi!
          </CredenzaDescription>
        </CredenzaHeader>
        <CredenzaBody className="sm:mb-0 mb-4">
          <div className="grid gap-2">
            <span className="text-foreground/90 text-xs">Recommended!</span>
            <div className="grid grid-cols-2 gap-3 w-full">
              <Button asChild className="cursor-pointer relative">
                <Link
                  href={`https://wa.me/${siteConfig.phone}`}
                  target="_blank"
                  className="flex items-center text-left gap-3"
                >
                  <span>Whatsapp</span>
                  <LucideExternalLink className="!h-3.5 !w-3.5 absolute right-3" />
                </Link>
              </Button>
              <Button asChild className="cursor-pointer relative">
                <Link
                  href={`${siteConfig.discord}`}
                  target="_blank"
                  className="flex items-center text-left gap-3"
                >
                  <span>Discord</span>
                  <LucideExternalLink className="h-3.5 !w-3.5 absolute right-3" />
                </Link>
              </Button>
            </div>
            <span className="text-foreground/80 text-xs mt-2">Other</span>
            <Button
              asChild
              className="cursor-pointer relative"
              variant="outline"
            >
              <Link
                onClick={() => {
                  try {
                    navigator.clipboard.writeText(siteConfig.email);
                  } catch (error) {
                    console.error(error);
                  }
                }}
                href={`mailto:${siteConfig.email}`}
                target="_blank"
                className="flex items-center text-left gap-3"
              >
                <span>Email</span>
                <LucideExternalLink className="!h-4 !w-4 absolute right-3" />
              </Link>
            </Button>
            <Button
              asChild
              className="cursor-pointer relative"
              variant="outline"
            >
              <Link
                href={`${siteConfig.instagram}`}
                target="_blank"
                className="flex items-center text-left gap-3"
              >
                <span>Instagram</span>
                <LucideExternalLink className="!h-4 !w-4 absolute right-3" />
              </Link>
            </Button>
          </div>
        </CredenzaBody>
      </CredenzaContent>
    </Credenza>
  );
}
