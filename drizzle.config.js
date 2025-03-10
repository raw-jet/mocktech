/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://accounts:npg_NQsM0lfL6UHF@ep-fancy-truth-a5yhgbj9-pooler.us-east-2.aws.neon.tech/MockTech?sslmode=require',
    }
  }; 