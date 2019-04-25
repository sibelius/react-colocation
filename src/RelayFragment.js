const Post = ({ post }) => (
  <div>
    <span>{post.title}</span>
    <span>{post.description}</span>
  </div>
);

const PostFragmentContainer = createFragmentContainer(
  Post, {
  post: graphql`
    fragment Post_post on Post {
      id
      title
      description
    },
  `,
});
