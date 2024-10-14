import { FC } from "react"
import s from "./Swatch.module.css"
import { Check } from "@components/icons"
import cn from "classnames"
import { isDark } from "@lib/color"

interface Props {
   size?: "sm" | "md" | "lg"
   local?: "brasil" | "china"
   capacidade?: 128 | 256 | 512 | 1024
   color?: string
   label?: string
   active?: boolean
   variant: "size" | "color" | "local" | "capacidade" | string
   onClick: () => void
}


const Swatch: FC<Props>= ({
    color,
    label, 
    variant,
  
    active,
    size="md",
    local="brasil",
    capacidade=256,
    ...rest 
}) => {

label = label?.toLowerCase()
variant = variant?.toLocaleLowerCase()

const rootClassName = cn(
    
    s.root,
    {
        [s.active]: active,
        [s.color]: color,
        [s.capacidade]: capacidade,
        [s.size]: variant === "size",
        [s.local]: variant === "local", 
        [s.capacidade]: variant === "capacidade",
        [s.dark]: color && isDark(color),

        [s.sm]: size === "sm",
        [s.china]: local === "china",
        [s[1024]]: capacidade === 1024
    }
)
    return (
     <button
     style={color ? {backgroundColor: color} : {}}
     className={rootClassName}
     {...rest}
     >
        {
            variant === "color" && active && 
                <span>
                    <Check />
                
                </span>
        }
     
       { variant === "size" ? label : null }
       { variant === "local" ? label : null}
       { variant === "capacidade" ? label : null}
       { variant === "capacidade" && 'GB'}
     </button>
    )
}

export default Swatch