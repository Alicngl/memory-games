import { Button } from "@chakra-ui/react";
import Link from "next/link";

function LinkButton({ href, children, target, ...props }: any) {
  return (
    <Link href={href}>
      <a target={target}>
        <Button
          colorScheme={"whatsapp"}
          size={"md"}
          w="full"
          _hover={{
            backgroundColor: "#fff",
            color: "#2EC105",
            transition: "1s",
            border: "1px solid #2CAC09",
          }}
          color="#fff"
          {...props}>
          {children}
        </Button>
      </a>
    </Link>
  );
}

function BaseButton({ children, ...props }: any) {
  return (
    <Button
      {...props}
      colorScheme={"whatsapp"}
      size={"md"}
      w="full"
      _hover={{
        backgroundColor: "#fff",
        color: "#2EC105",
        transition: "1s",
        border: "1px solid #2CAC09",
      }}
      color="#fff">
      {children}
    </Button>
  );
}

function ButtonComponent({ children, ...props }: any) {
  const Comp = props.href ? LinkButton : BaseButton;
  return <Comp {...props}>{children}</Comp>;
}

export default ButtonComponent;
