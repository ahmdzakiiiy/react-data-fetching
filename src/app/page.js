import styles from "./page.module.css";
import { Container, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <div className={styles.page}>
      <main>

        <Container>
          <Heading>Hello World</Heading>
        </Container>
      </main>


    </div>
  );
}
