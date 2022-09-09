import {
  Input,
  InputGroup,
  Center,
  Box,
  Text,
  Heading,
  InputRightElement,
  Button,
  Checkbox,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";

// Yup Form Validation Schema
const schema = yup
  .object({
    password: yup.string().required("This field is required"),
    confirmPassword: yup.string().required("This field is required"),
  })
  .required();

const SetPassword = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Function to toggle password show state
  const showPasswordClickHandler = () => setShowPassword(!showPassword);

  // Function to toggle confirmPassword show state
  const showConfirmPasswordClickHandler = () =>
    setShowConfirmPassword(!showConfirmPassword);

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
            Set Your Password
          </Text>
          <Text color="#585858" fontSize="xs" fontWeight="400px">
            Please kindly fill up the form*
          </Text>
        </Box>

        {/* handleSubmit will validate your inputs before invoking "onSubmit" */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box position="relative" paddingBottom="28px">
            <InputGroup>
              <Input
                minHeight="56px"
                pr="4.5rem"
                {...register("password")}
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
              />
              <InputRightElement minHeight="56px" width="4.5rem">
                <Button
                  h="1.75rem"
                  bg="transparent"
                  size="sm"
                  onClick={showPasswordClickHandler}
                >
                  {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Text position="absolute" bottom="2px" color="red">
              {errors.password?.message}
            </Text>
          </Box>

          <Box position="relative" paddingBottom="28px">
            <InputGroup>
              <Input
                minHeight="56px"
                pr="4.5rem"
                {...register("confirmPassword")}
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Enter password"
              />
              <InputRightElement minHeight="56px" width="4.5rem">
                <Button
                  h="1.75rem"
                  bg="transparent"
                  size="sm"
                  onClick={showConfirmPasswordClickHandler}
                >
                  {showConfirmPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Text position="absolute" bottom="2px" color="red">
              {errors.confirmPassword?.message}
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

export default SetPassword;
