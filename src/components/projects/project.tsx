import { cx } from "../../utils";

export interface ProjectProps extends React.ComponentPropsWithoutRef<"a"> {
  children: React.ReactNode;
}

export default function Project({
  children,
  href,
  className = "",
  ...props
}: ProjectProps) {
  return (
    <a
      href={href}
      target="_blank"
      className={cx(
        "ease bg-gray bg-colorful-gradient bg-3x bg-[0%_0%] p-px transition-bg-pos-transform duration-500 hover:bg-[100%_100%]",
        className,
      )}
      {...props}
    >
      <div className="h-full w-full overflow-hidden bg-[#30333A90] backdrop-blur-2xl">
        {children}
      </div>
    </a>
  );
}
