import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";
import AuthorChip from "@components/author/authorChip";
import { AuthorPost } from "blogTypes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
	post: AuthorPost;
};

const AuthorPostPreview: React.FC<Props> = ({ post }) => {
	return (
		<Center h="auto" py="1rem">
			<Flex
				h="100%"
				width={["98%", "90%", "75%", "60%", "60%", "50%", "40%"]}
				align="center"
				direction="column"
				bg="background.200"
				rounded="10px"
				p="10px">
				<Box w="100%">
					<Link href={`/${post.slug}`} passHref>
						<a>
							<Image
								src={post.heroUrl}
								layout="responsive"
								alt="Project Tumbnail"
								width="2560px"
								height="1080px"
							/>
						</a>
					</Link>
				</Box>
				<Box py="10px" h="100%" w="100%">
					<AuthorChip
						avatarUrl={post.Author.avatarUrl}
						name={post.Author.name}
						slug={post.Author.slug}
						createdAt={post.createdAt}
					/>
					<Box px={{ base: "0px", sm: "50px" }} pt="10px">
						<Link href={`/${post.slug}`} passHref>
							<a>
								<Heading
									as="h1"
									textColor="white"
									noOfLines={2}
									fontSize={{
										base: "3xl",
										sm: "4xl",
										"2xl": "5xl"
									}}
									maxW="100%"
									mb="10px">
									{post.title}
								</Heading>
								<Text
									textColor="white"
									noOfLines={2}
									maxW="100%">
									{post.description}
								</Text>
							</a>
						</Link>
					</Box>
				</Box>
			</Flex>
		</Center>
	);
};

export default AuthorPostPreview;
