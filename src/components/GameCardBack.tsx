import {PropsWithChildren} from "react";

interface GameCardBackProps {
  id: string
}

export function GameCardBack({id, children}: PropsWithChildren<GameCardBackProps>) {
  return <div
    data-card-id={id}
    className="relative w-12 h-16 bg-linear-to-br from-primary to-primary-glow rounded-lg border-2 border-primary/20 flex items-center justify-center text-white font-bold text-xs shadow-md"
  >
    <span>🎴</span>
    {children}
  </div>
}