import React from "react";

export interface FooterItemProps extends React.ComponentPropsWithoutRef<"a"> {
  children: React.ReactElement;
}

export default function FooterItem({ children, ...props }: FooterItemProps) {
  return (
    <div className="rounded-full p-px hover:bg-gradient-to-br from-[#7B1FA2] to-[#673AB7] transition duration-700 group">
      <a data-interactable className="link" target="_blank" {...props}>
        {React.cloneElement(children, {
          className:
            "group-hover:fill-[url(#purple-gradient)] transition duration-300",
        })}
      </a>
    </div>
  );
}
