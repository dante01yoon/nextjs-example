import {
  GetServerSideProps,
  NextPage,
} from "next"

const About: NextPage = (props) => {

}

const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context;

  return {
    props: {
      notFound: true,
    }
  }
}


export default About;
