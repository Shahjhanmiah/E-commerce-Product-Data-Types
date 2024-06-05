import {z } from "zod";


const ProductValidationSchema = z.object({

  name:z.string({ invalid_type_error:'academicDepartment must be string'})
  

})


export const ProductValidation ={
    ProductValidationSchema

}