import React from 'react'
import { FormButton, FormLabel,Container,FormWrap,Icon,FormContent,FormInput,Form,FormH1,Text} from './SigninElements'

const SignIn = () => {
    return (
        <div>
            <Container>
                <FormWrap>
                    <Icon to='/'>Paezy</Icon>
                    <FormContent>
                        <Form action='#'>
                            <FormH1>
                                Sign in to your account
                            </FormH1>
                            <FormLabel htmlfor='for'>Email</FormLabel>
                            <FormInput type='email' required/>
                            <FormLabel htmlfor='for'>Password</FormLabel>
                            <FormInput type='password' required/>
                            <FormButton type='submit'>Continue</FormButton>
                            <Text>Forgot Password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </div>
    )
}

export default SignIn
