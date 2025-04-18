// components/SignUpButton.js

import { Button } from "@chakra-ui/react";

const SignUpButton = (props) => {
  return (
    <Button
      bg="#D2AC71"
      color="#121212"
      borderRadius="12px"
      height="40px"
      minW="125px"
      px={6}
      fontSize="16px"
      fontWeight="semibold"
      _hover={{ opacity: 0.85 }}
      _active={{ opacity: 0.7 }}
      cursor="pointer"
      onClick={() => console.log("Sign up button clicked")}
      {...props}
    >
      Sign up
    </Button>
  );
};

export default SignUpButton;
