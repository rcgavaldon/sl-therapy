import "./globals.css";
import Providers from "@/components/Providers";

export const metadata = {
  title: "SL Therapy | Fisioterapia Deportiva en El Paso, TX",
  description: "Rehabilitación deportiva especializada en El Paso, TX. Sin referido médico. Agenda tu consulta gratis.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
