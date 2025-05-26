
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, Star, MapPin, Clock, Users } from "lucide-react";

const JobSearchDesign11 = () => {
  return (
    <section className="py-20 bg-gradient-to-tr from-orange-100 via-red-50 to-pink-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-full text-lg font-bold mb-6">
              <Star className="h-6 w-6" />
              Elite Career Accelerator
            </div>
            <h2 className="text-6xl font-black mb-6 text-gray-900">
              Launch Your
              <span className="block text-orange-500">Dream Career</span>
            </h2>
            <p className="text-2xl text-gray-700 font-medium">Join the exclusive network of top performers</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card className="bg-white shadow-2xl border-4 border-orange-200">
                <CardContent className="p-8">
                  <h3 className="text-3xl font-bold mb-6 text-orange-600">Quick Application</h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fname" className="text-lg font-semibold">First Name</Label>
                        <Input id="fname" className="mt-2 h-12 text-lg border-2 border-orange-200" />
                      </div>
                      <div>
                        <Label htmlFor="lname" className="text-lg font-semibold">Last Name</Label>
                        <Input id="lname" className="mt-2 h-12 text-lg border-2 border-orange-200" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-lg font-semibold">Email Address</Label>
                      <Input id="email" type="email" className="mt-2 h-12 text-lg border-2 border-orange-200" />
                    </div>
                    <div>
                      <Label htmlFor="experience" className="text-lg font-semibold">Experience Level</Label>
                      <select className="w-full mt-2 h-12 px-4 text-lg border-2 border-orange-200 rounded-md">
                        <option>Junior (0-2 years)</option>
                        <option>Mid-level (3-5 years)</option>
                        <option>Senior (6-10 years)</option>
                        <option>Executive (10+ years)</option>
                      </select>
                    </div>
                    <div className="border-4 border-dashed border-orange-300 rounded-xl p-8 text-center bg-orange-50">
                      <Upload className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                      <p className="text-xl font-bold text-orange-700">Drop Resume Here</p>
                      <p className="text-orange-600">Or click to browse</p>
                    </div>
                    <Button className="w-full h-14 text-xl font-bold bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                      Join Elite Network
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-xl border-l-8 border-orange-500">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-orange-100 p-4 rounded-full">
                    <Users className="h-8 w-8 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">50,000+</h3>
                    <p className="text-gray-600">Elite Members</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-xl border-l-8 border-red-500">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-red-100 p-4 rounded-full">
                    <Clock className="h-8 w-8 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">24 Hours</h3>
                    <p className="text-gray-600">Average Match Time</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Premium Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Star className="h-5 w-5" />
                    <span>Priority job matching</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Star className="h-5 w-5" />
                    <span>Executive recruiter access</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Star className="h-5 w-5" />
                    <span>Salary negotiation support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobSearchDesign11;
