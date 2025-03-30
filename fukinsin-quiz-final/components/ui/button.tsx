export function Button({ children, ...props }: any) {
  return <button className="px-4 py-2 bg-gray-300 rounded" {...props}>{children}</button>;
}