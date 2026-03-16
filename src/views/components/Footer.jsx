import { personal } from '../../models/personal'

export default function Footer() {
  return (
    <footer className="px-6 pb-16 pt-4">
      <p className="font-mono text-xs text-muted-2">
        © {new Date().getFullYear()} {personal.fullName}. Built with React & Tailwind.
      </p>
    </footer>
  )
}
