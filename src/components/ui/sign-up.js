import { Button } from "@chakra-ui/react";
import Link from 'next/link';

const SignUpButton = (props) => {
  return (
    <Link href="/signup" passHref>
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
        {...props}
      >
        Sign up
      </Button>
    </Link>
  );
};

export default SignUpButton;
