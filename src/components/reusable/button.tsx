import React from "react";

const Button = ({
  variant,
  text,
  action,
}: {
  variant: "primary" | "secondary";
  text: string;
  action: () => void;
}) => {
  return (
    <button
      className={`${
        variant === "primary"
          ? "bg-accent text-white hover:bg-text hover:text-accent"
          : "bg-accent/20 text-accent hover:bg-text"
      } px-[15px] py-[5px] text-2xl font-bold rounded-[10px] justify-center items-center flex transition-all`}
      onClick={action}
    >
      {text}
    </button>
  );
};

export default Button;
