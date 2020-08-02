import gql from "graphql-tag";

const getAllCategoriesQuery = gql`
  {
    allCategories{
        value
        label
    }
      
  }
`;

export default getAllCategoriesQuery ;