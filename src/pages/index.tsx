import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
  Stack,
} from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";
import Login from "../components/Login";

const Index = () => (
  <Stack height="100vh" bg={"#6b68ba"}>
    <Login />
  </Stack>
);

export default Index;
