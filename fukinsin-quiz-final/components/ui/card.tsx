export function Card({ children }: any) {
  return <div className="bg-white rounded shadow-md">{children}</div>;
}

export function CardContent({ children }: any) {
  return <div className="p-4">{children}</div>;
}