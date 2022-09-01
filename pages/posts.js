import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbPortfolio from '../public/images/contents/youtube-how-to-build-portfolio.jpg'
import thumbHowToUseInkdrop from '../public/images/contents/youtube-how-to-use-inkdrop.jpg'
import thumbFishWorkflow from '../public/images/contents/youtube-fish-workflow.jpg'
import thumbMyDeskSetup from '../public/images/contents/youtube-my-desk-setup.jpg'
import thumb500PaidUsers from '../public/images/contents/blog-500-paid-users.jpg'
import thumbFinancialGoal from '../public/images/contents/blog-financial-goal.png'
import thumbHowToPriceYourself from '../public/images/contents/blog-how-to-price-yourself.jpg'
import thumb50xFaster from '../public/images/contents/youtube-50x-faster.jpg'
import { Formik } from 'formik';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,Button,Input
} from '@chakra-ui/react'


const Posts = () => ( 
  <Layout title="Register">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Register
      </Heading>
       <form action="https://formsubmit.co/347d47a8238511fac18e839fff8f5420" method="POST">
         <FormControl isRequired>
           <FormLabel>First name</FormLabel>
           <Input placeholder='First name' name="First Name" />
	   <FormLabel>Phone Number</FormLabel>
           <Input placeholder='phone number' name="phone number" />
	   <FormLabel>E-MAIL adresses</FormLabel>
	   <Input placeholder="E-mail...." name="email"/>
	   <Button
              mt={4}
              colorScheme='teal'
              type='submit'
            >
              Submit
            </Button>
         </FormControl> 
      </form>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
