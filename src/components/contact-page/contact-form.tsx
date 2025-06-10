"use client";

import { Card, CardContent } from "../ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Textarea } from "../ui/textarea";
import { toast } from "sonner";
import { Checkbox } from "../ui/checkbox";

const contactFormSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: "Name too short." })
      .max(64, { message: "Please enter a shorter name." }),
    email: z.string().email({ message: "Please enter a valid email." }),
    phone: z
      .string()
      .min(10, { message: "Please enter a valid number." })
      .max(11, { message: "Please enter a valid phone number." }),
    company: z.string().min(1, { message: "Please provide your company." }),
    message: z
      .string()
      .min(1, { message: "Please provide a message!" })
      .max(1024, { message: "Please shorten your message" }),
    projectType: z.enum(["graphic-design", "website", "none"]),
    designType: z.string().optional(),
    brandColors: z.string().optional(),
    projectConcept: z.string().optional(),
    websiteType: z.string().optional(),
    currentWebsite: z.string().optional(),
    projectVision: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.projectType === "graphic-design") {
        return data.designType && data.brandColors && data.projectConcept;
      }
      return true;
    },
    {
      message: "Please complete all design project fields",
      path: ["designType", "brandColors", "projectConcept"],
    }
  )
  .refine(
    (data) => {
      if (data.projectType === "website") {
        return data.websiteType && data.currentWebsite && data.projectVision;
      }
      return true;
    },
    {
      message: "Please complete all website project fields",
      path: ["websiteType", "currentWebsite", "projectVision"],
    }
  );

type FormData = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      projectType: "none",
      designType: "",
      brandColors: "",
      projectConcept: "",
      websiteType: "",
      currentWebsite: "",
      projectVision: "",
    },
  });

  const projectType = form.watch("projectType");

  function onSubmit(data: FormData) {
    console.log(data);
    toast.success("Thank you for contacting us. We will be in touch shortly.");
    form.reset();
  }

  return (
    <div className="w-full px-4 py-8 md:px-[clamp(1rem,5vw,3rem)] md:py-12">
      <div className="mx-auto max-w-[90vw] space-y-8 md:space-y-12">
        <div>
          <Card>
            <CardContent className="p-4 md:p-6">
              <div>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6 md:space-y-8"
                  >
                    <div className="space-y-4">
                      <FormLabel className="text-lg md:text-xl">
                        If interested in creating a project with Vero, please
                        select an option below.
                      </FormLabel>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <FormField
                          control={form.control}
                          name="projectType"
                          render={({ field }) => (
                            <FormItem className="flex items-center space-x-2">
                              <FormControl>
                                <Checkbox
                                  checked={field.value === "graphic-design"}
                                  onCheckedChange={(checked) => {
                                    field.onChange(
                                      checked ? "graphic-design" : "none"
                                    );
                                  }}
                                />
                              </FormControl>
                              <FormLabel>Graphic Design</FormLabel>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="projectType"
                          render={({ field }) => (
                            <FormItem className="flex items-center space-x-2">
                              <FormControl>
                                <Checkbox
                                  checked={field.value === "website"}
                                  onCheckedChange={(checked) => {
                                    field.onChange(
                                      checked ? "website" : "none"
                                    );
                                  }}
                                />
                              </FormControl>
                              <FormLabel>Website</FormLabel>
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4 md:gap-y-8 md:gap-x-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem className="col-span-1">
                            <FormLabel className="text-lg md:text-xl">
                              Name:
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="Full Name" {...field} />
                            </FormControl>
                            {form.formState.errors.name ? (
                              <FormMessage />
                            ) : (
                              <FormDescription>
                                This is your full name
                              </FormDescription>
                            )}
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem className="col-span-1">
                            <FormLabel className="text-lg md:text-xl">
                              Email:
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="Email" {...field} />
                            </FormControl>
                            {form.formState.errors.email ? (
                              <FormMessage />
                            ) : (
                              <FormDescription>
                                This is your email address.
                              </FormDescription>
                            )}
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem className="col-span-1">
                            <FormLabel className="text-lg md:text-xl">
                              Phone:
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="Phone" {...field} />
                            </FormControl>
                            {form.formState.errors.phone ? (
                              <FormMessage />
                            ) : (
                              <FormDescription>
                                This is your phone number.
                              </FormDescription>
                            )}
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem className="col-span-1">
                            <FormLabel className="text-lg md:text-xl">
                              Company:
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="Company name" {...field} />
                            </FormControl>
                            {form.formState.errors.company ? (
                              <FormMessage />
                            ) : (
                              <FormDescription>
                                This is the name of your company (can be solo).
                              </FormDescription>
                            )}
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem className="col-span-1 sm:col-span-2">
                            <FormLabel className="text-lg md:text-xl">
                              Message:
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Message"
                                className="h-[10vh] min-h-[100px]"
                                {...field}
                              />
                            </FormControl>
                            {form.formState.errors.message ? (
                              <FormMessage />
                            ) : (
                              <FormDescription>
                                Why are you contacting Vero?
                              </FormDescription>
                            )}
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Conditional Graphic Design fields */}
                    {projectType === "graphic-design" && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4 md:gap-y-8 md:gap-x-6">
                        <FormField
                          control={form.control}
                          name="designType"
                          render={({ field }) => (
                            <FormItem className="col-span-1">
                              <FormLabel className="text-lg md:text-xl">
                                Type of Design:
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Logo, Branding, etc."
                                  {...field}
                                />
                              </FormControl>
                              {form.formState.errors.designType ? (
                                <FormMessage />
                              ) : (
                                <FormDescription>
                                  What kind of design work do you need?
                                </FormDescription>
                              )}
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="brandColors"
                          render={({ field }) => (
                            <FormItem className="col-span-1">
                              <FormLabel className="text-lg md:text-xl">
                                Brand Colors:
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Your brand colors"
                                  {...field}
                                />
                              </FormControl>
                              {form.formState.errors.brandColors ? (
                                <FormMessage />
                              ) : (
                                <FormDescription>
                                  Any specific colors you'd like to use?
                                </FormDescription>
                              )}
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="projectConcept"
                          render={({ field }) => (
                            <FormItem className="col-span-1 sm:col-span-2">
                              <FormLabel className="text-lg md:text-xl">
                                Project Concept
                              </FormLabel>
                              <FormControl>
                                <Textarea
                                  className="h-[10vh] min-h-[100px]"
                                  placeholder="Project concept"
                                  {...field}
                                />
                              </FormControl>
                              {form.formState.errors.projectConcept ? (
                                <FormMessage />
                              ) : (
                                <FormDescription>
                                  A brief concept of your project.
                                </FormDescription>
                              )}
                            </FormItem>
                          )}
                        />
                      </div>
                    )}

                    {/* Conditional Website fields */}
                    {projectType === "website" && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4 md:gap-y-8 md:gap-x-6">
                        <FormField
                          control={form.control}
                          name="websiteType"
                          render={({ field }) => (
                            <FormItem className="col-span-1">
                              <FormLabel className="text-lg md:text-xl">
                                Type of Website:
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="E-commerce, Portfolio, etc."
                                  {...field}
                                />
                              </FormControl>
                              {form.formState.errors.websiteType ? (
                                <FormMessage />
                              ) : (
                                <FormDescription>
                                  What kind of website do you need?
                                </FormDescription>
                              )}
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="currentWebsite"
                          render={({ field }) => (
                            <FormItem className="col-span-1">
                              <FormLabel className="text-lg md:text-xl">
                                Current Website:
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Your current website URL"
                                  {...field}
                                />
                              </FormControl>
                              {form.formState.errors.currentWebsite ? (
                                <FormMessage />
                              ) : (
                                <FormDescription>
                                  Do you have an existing website?
                                </FormDescription>
                              )}
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="projectVision"
                          render={({ field }) => (
                            <FormItem className="col-span-1 sm:col-span-2">
                              <FormLabel className="text-lg md:text-xl">
                                Project Vision
                              </FormLabel>
                              <FormControl>
                                <Textarea
                                  className="h-[10vh] min-h-[100px]"
                                  placeholder="Project vision"
                                  {...field}
                                />
                              </FormControl>
                              {form.formState.errors.projectVision ? (
                                <FormMessage />
                              ) : (
                                <FormDescription>
                                  Brief description of your project.
                                </FormDescription>
                              )}
                            </FormItem>
                          )}
                        />
                      </div>
                    )}

                    <Button
                      type="submit"
                      className="w-full sm:w-auto cursor-pointer"
                    >
                      Submit
                    </Button>
                  </form>
                </Form>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
