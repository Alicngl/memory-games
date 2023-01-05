import { Button } from "@chakra-ui/react";
import Link from "next/link";

function LinkButton({ href, children, target, ...props }: any) {
  return (
    <Link href={href}>
      <Button size={"md"} w="full" {...props}>
        {children}
      </Button>
    </Link>
  );
}

function BaseButton({ children, ...props }: any) {
  return (
    <Button {...props} size={"md"} w="full">
      {children}
    </Button>
  );
}

function ButtonComponent({ children, ...props }: any) {
  const Comp = props.href ? LinkButton : BaseButton;
  return <Comp {...props}>{children}</Comp>;
}

export default ButtonComponent;
