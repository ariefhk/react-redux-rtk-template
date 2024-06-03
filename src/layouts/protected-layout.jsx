import { cn } from "@/lib/tailwind-utils"
import PropTypes from "prop-types"

export default function ProtectedLayout({ className, children }) {
  return <main className={cn(className)}> {children}</main>
}

ProtectedLayout.propTypes = {
  className: PropTypes.className,
  children: PropTypes.node,
}
