
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, Zap, ChartBar, DollarSign, TrendingUp, Award } from "lucide-react";

const JobSearchDesign20 = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-100 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold mb-8">
              EXECUTIVE SEARCH PLATFORM
            </div>
            <h2 className="text-6xl font-bold mb-8 text-gray-900">
              Data-Driven Career
              <span className="block text-indigo-600 font-black">Intelligence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Leverage advanced analytics and market intelligence to accelerate your executive career trajectory.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-6 mb-12">
            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-6 text-center">
                <ChartBar className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900">95%</div>
                <div className="text-sm text-gray-600">Placement Success</div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-10 w-10 text-green-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900">$180K</div>
                <div className="text-sm text-gray-600">Avg Salary Increase</div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-6 text-center">
                <Award className="h-10 w-10 text-purple-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Fortune Companies</div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-6 text-center">
                <Zap className="h-10 w-10 text-orange-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900">72hrs</div>
                <div className="text-sm text-gray-600">First Response</div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-8 text-white">
              <h3 className="text-3xl font-bold mb-2">Executive Profile Assessment</h3>
              <p className="text-indigo-100">Comprehensive evaluation for C-level and senior executive positions</p>
            </div>
            
            <div className="p-10">
              <form className="space-y-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="execName" className="text-gray-700 font-semibold text-lg">Executive Name</Label>
                        <Input 
                          id="execName" 
                          className="mt-2 h-12 border-2 border-gray-300 focus:border-indigo-500 transition-colors" 
                          placeholder="Full Name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="execEmail" className="text-gray-700 font-semibold text-lg">Executive Email</Label>
                        <Input 
                          id="execEmail" 
                          type="email"
                          className="mt-2 h-12 border-2 border-gray-300 focus:border-indigo-500 transition-colors" 
                          placeholder="executive@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="currentTitle" className="text-gray-700 font-semibold text-lg">Current Title</Label>
                        <Input 
                          id="currentTitle" 
                          className="mt-2 h-12 border-2 border-gray-300 focus:border-indigo-500 transition-colors" 
                          placeholder="Chief Technology Officer"
                        />
                      </div>
                      <div>
                        <Label htmlFor="company" className="text-gray-700 font-semibold text-lg">Current Company</Label>
                        <Input 
                          id="company" 
                          className="mt-2 h-12 border-2 border-gray-300 focus:border-indigo-500 transition-colors" 
                          placeholder="Fortune 500 Company"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="targetRole" className="text-gray-700 font-semibold text-lg">Target Role Level</Label>
                        <select className="w-full mt-2 h-12 px-4 border-2 border-gray-300 focus:border-indigo-500 rounded-md bg-white">
                          <option>C-Suite (CEO, CTO, CFO)</option>
                          <option>Senior VP / EVP</option>
                          <option>VP Level</option>
                          <option>Director / Senior Director</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="industry" className="text-gray-700 font-semibold text-lg">Industry Focus</Label>
                        <select className="w-full mt-2 h-12 px-4 border-2 border-gray-300 focus:border-indigo-500 rounded-md bg-white">
                          <option>Technology & Software</option>
                          <option>Financial Services</option>
                          <option>Healthcare & Biotech</option>
                          <option>Manufacturing</option>
                          <option>Consulting</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="compensation" className="text-gray-700 font-semibold text-lg">Target Total Compensation</Label>
                      <select className="w-full mt-2 h-12 px-4 border-2 border-gray-300 focus:border-indigo-500 rounded-md bg-white">
                        <option>$300,000 - $500,000</option>
                        <option>$500,000 - $750,000</option>
                        <option>$750,000 - $1,000,000</option>
                        <option>$1,000,000+</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-indigo-50 border-2 border-dashed border-indigo-300 rounded-xl p-8 text-center">
                      <Upload className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                      <p className="font-semibold text-indigo-700 mb-2">Executive Resume</p>
                      <p className="text-sm text-indigo-600">Confidential & Secure Upload</p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h4 className="font-semibold text-gray-800 mb-4">Executive Services Include:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                          <span>Confidential search process</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                          <span>Board-level introductions</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                          <span>Compensation benchmarking</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                          <span>Executive coaching support</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-8">
                  <Button className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700">
                    <DollarSign className="mr-3 h-5 w-5" />
                    Submit Executive Assessment
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobSearchDesign20;
