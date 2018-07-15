import React from "react";
import {
    Layout,
    Link,
    Text,
    Heading
} from "spectacle";

const Cover = () => (
    <div>
        <Heading size={1} fit caps lineHeight={1} textColor="secondary" margin="15% 0">
            Leveling up your UI using redux
        </Heading>
        <Layout>
            <Text textSize="24" textAlign="right">
                António Capelo
            </Text>
            <Text textSize="24" textAlign="right">
                Vasco Santos
            </Text>
        </Layout>
        <Layout>
            <Text textSize="18" textAlign="right">
                <Link href="https://github.com/antoniocapelo">
                    @antoniocapelo
                </Link>
            </Text>
            <Text textSize="18" textAlign="right">
                <Link href="https://github.com/vasco-santos">
                    @vasco-santos
                </Link>
            </Text>
        </Layout>
        <Layout>
            <Text textSize="18" textAlign="right">
                Software Engineer
                <Link href="https://github.com/moxystudio" margin="0 3px">
                    @moxystudio
                </Link>
            </Text>
            <Text textSize="18" textAlign="right">
                Software Engineer
                <Link href="https://github.com/moxystudio" margin="0 3px">
                    @moxystudio
                </Link>
            </Text>
        </Layout>
    </div>
);

export default Cover;
