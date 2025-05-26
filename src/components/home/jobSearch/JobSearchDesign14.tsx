
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, Shield, Zap, Globe, CheckCircle } from "lucide-react";

const JobSearchDesign14 = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-slate-800 text-white px-6 py-2 rounded-lg text-sm font-medium mb-6">
              ENTERPRISE GRADE TALENT PLATFORM
            </div>
            <h2 className="text-5xl font-bold mb-6 text-slate-800">
              Professional Career
              <span className="block text-blue-600">Intelligence</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Advanced recruitment technology trusted by Fortune 500 companies worldwide
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <Card className="bg-white shadow-xl border-0">
                <CardContent className="p-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="h-12 w-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800">Secure Application Portal</h3>
                  </div>

                  <form className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName" className="text-slate-700 font-medium">First Name</Label>
                        <Input id="firstName" className="mt-2 h-12 border-slate-300" />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-slate-700 font-medium">Last Name</Label>
                        <Input id="lastName" className="mt-2 h-12 border-slate-300" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-slate-700 font-medium">Corporate Email</Label>
                      <Input id="email" type="email" className="mt-2 h-12 border-slate-300" placeholder="name@company.com" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="title" className="text-slate-700 font-medium">Current Title</Label>
                        <Input id="title" className="mt-2 h-12 border-slate-300" placeholder="Senior Software Engineer" />
                      </div>
                      <div>
                        <Label htmlFor="company" className="text-slate-700 font-medium">Current Company</Label>
                        <Input id="company" className="mt-2 h-12 border-slate-300" placeholder="Google, Microsoft..." />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="salary" className="text-slate-700 font-medium">Target Compensation</Label>
                      <select className="w-full mt-2 h-12 px-4 border border-slate-300 rounded-md bg-white">
                        <option>$100,000 - $150,000</option>
                        <option>$150,000 - $200,000</option>
                        <option>$200,000 - $300,000</option>
                        <option>$300,000+</option>
                      </select>
                    </div>

                    <div className="bg-slate-50 border-2 border-dashed border-slate-300 rounded-lg p-8 text-center">
                      <Upload className="h-10 w-10 text-slate-500 mx-auto mb-4" />
                      <p className="font-medium text-slate-700 mb-2">Confidential Resume Upload</p>
                      <p className="text-sm text-slate-500">Bank-level encryption • GDPR compliant</p>
                    </div>

                    <Button className="w-full h-14 text-lg font-semibold bg-blue-600 hover:bg-blue-700">
                      Submit Application
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <Card className="bg-blue-600 text-white border-0">
                <CardContent className="p-8">
                  <Globe className="h-12 w-12 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Global Network</h3>
                  <p className="text-blue-100 mb-4">Access to 50,000+ executive positions worldwide</p>
                  <div className="text-3xl font-bold">195</div>
                  <div className="text-blue-200">Countries</div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 text-white border-0">
                <CardContent className="p-8">
                  <Zap className="h-12 w-12 mb-4" />
                  <h3 className="text-xl font-bold mb-3">AI Matching</h3>
                  <p className="text-slate-300 mb-4">Advanced algorithms for perfect role alignment</p>
                  <div className="text-3xl font-bold">98.5%</div>
                  <div className="text-slate-400">Accuracy Rate</div>
                </CardContent>
              </Card>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h4 className="font-semibold text-green-800 mb-3">Enterprise Benefits</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-green-700">
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-sm">Priority placement</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-700">
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-sm">Executive coaching</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-700">
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-sm">Compensation analysis</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobSearchDesign14;
