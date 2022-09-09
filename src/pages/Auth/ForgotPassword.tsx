import {
  Input,
  Center,
  Box,
  Text,
  Heading,
  Button,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";

// Yup Form Validation Schema
const schema = yup.object({
  email: yup.string().required("This field is required"),
});

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Function called on Form submit
  const onSubmit = (data: any) => {
    console.log("form submitted", data);
    reset();
  };

  return (
    <Center bg="#C4C4C4" minHeight="100vh">
      <Box minWidth="515px" padding="40px" bg="#FFFFFF">
        <HStack spacing={8} marginBottom="28px">
          <img src="" alt="logo" />
          <VStack align="left">
            <Heading color="#E34363" fontSize="20px" fontWeight="500">
              Goverment of Nepal
            </Heading>
            <Heading color="#E34363" fontSize="20px" fontWeight="500">
              Samridhi App
            </Heading>
          </VStack>
        </HStack>
        <Box marginBottom="28px">
          <Text color="#585858" fontSize="24px" fontWeight="400px">
            Forgot Your Password
          </Text>
          <Text color="#585858" fontSize="xs" fontWeight="400px">
            Please kindly fill up the form*
          </Text>
        </Box>

        {/* handleSubmit will validate your inputs before invoking "onSubmit" */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box position="relative" paddingBottom="28px">
            <Input
              minHeight="56px"
              pr="4.5rem"
              {...register("email")}
              placeholder="Enter Email Address"
            />
            <Text position="absolute" bottom="2px" color="red">
              {errors.email?.message}
            </Text>
          </Box>

          <Button width="100%" type="submit" marginBottom="52px">
            Submit
          </Button>
        </form>
        <HStack marginBottom="16px" justifyContent="center">
          <Text color="#585858" fontSize="14px" fontWeight="400px">
            Already have an account?
          </Text>
          <Text color="#003893" fontSize="14px" fontWeight="400px">
            <Link to="/login">Login</Link>
          </Text>
        </HStack>
        <Text
          color="#003893"
          fontSize="14px"
          fontWeight={400}
          display="flex"
          justifyContent="center"
        >
          Help me?
        </Text>
      </Box>
    </Center>
  );
};

export default ForgotPassword;
