// import { z } from 'zod';
// import { ProductServices } from './product.service';
// import { Product } from './product.model';

// // Define the Zod schema (as shown previously)
// const variantSchema = z.object({
//   type: z.string(),
//   value: z.string(),
// });

// const inventorySchema = z.object({
//   quantity: z.number(),
//   inStock: z.boolean(),
// });

// const productSchema = z.object({
//   name: z.string(),
//   description: z.string(),
//   price: z.number(),
//   category: z.string(),
//   tags: z.array(z.string()),
//   variants: z.array(variantSchema),
//   inventory: inventorySchema,
// });

// // Example data
// const exampleData = {
//   name: "iPhone 13",
//   description: "A sleek and powerful smartphone with cutting-edge features.",
//   price: 999,
//   category: "Electronics",
//   tags: ["smartphone", "Apple", "iOS"],
//   variants: [
//     {
//       type: "Color",
//       value: "Midnight Blue"
//     },
//     {
//       type: "Storage Capacity",
//       value: "256GB"
//     }
//   ],
//   inventory: {
//     quantity: 50,
//     inStock: true
//   }
// };

// async function createProduct(product) {
//     try {
//       console.log("Validating product data...");
//       // Parse and validate the data using the Zod schema
//       const validatedData = productSchema.parse(product);
  
//       console.log("Product data validated:", validatedData);
  
//       console.log("Calling ProductServices.createProduct...");
//       // Call the ProductServices.createProduct function with the validated data
//       const result = await ProductServices.createProduct(validatedData);
  
//       console.log("Product created successfully:", result);
//     } catch (e) {
//       console.error("Error:", e);
  
//       if (e instanceof z.ZodError) {
//         // Handle validation errors
//         console.error("Validation error:", e.errors);
//       } else {
//         // Handle other errors
//         console.error("Error creating product:", e);
//       }
//     }
//   }
  
//   // Call the createProduct function with exampleData
//   createProduct(exampleData);

//   export default productSchema

  