export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ka" }];
}

export default function BlogLayout({ children }) {
  return <>{children}</>;
}
