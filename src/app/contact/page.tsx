"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, MapPin, Mail, Phone, Clock, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import NavBar from '../components/slicings/navbar';
import Footer from '../components/slicings/footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <NavBar />

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            <span className="text-gray-900">Hubungi Kami</span> 
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Tim customer service kami siap membantu Anda 24/7. Jangan ragu untuk menghubungi kami kapan saja
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Section - Contact Info */}
          <div className="space-y-8">
            {/* Customer Service Illustration */}
            <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8 text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                  <Shield className="w-12 h-12 text-blue-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Tim Support Kami</h3>
              <p className="text-gray-600">Siap membantu Anda dengan layanan terbaik</p>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Alamat Kantor</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Jln Rembuksari No. 42, Kec Lowokwaru,
                        <br />
                        Kota Malang, Jawa Timur, 65141
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                      <p className="text-gray-600">support@rekber.com</p>
                      <p className="text-sm text-gray-500 mt-1">Respon dalam 24 jam</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Telepon</h3>
                      <p className="text-gray-600">+62 341 123 4567</p>
                      <p className="text-sm text-gray-500 mt-1">Senin - Jumat, 08:00 - 17:00 WIB</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Jam Operasional</h3>
                      <div className="text-gray-600 space-y-1">
                        <p>Senin - Jumat: 08:00 - 17:00 WIB</p>
                        <p>Sabtu: 09:00 - 15:00 WIB</p>
                        <p>Minggu: Tutup</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Ikuti Kami</h3>
              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 cursor-pointer transition-colors">
                  <Facebook className="w-6 h-6 text-white" />
                </div>
                <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 cursor-pointer transition-colors">
                  <Twitter className="w-6 h-6 text-white" />
                </div>
                <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 cursor-pointer transition-colors">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center hover:bg-pink-600 cursor-pointer transition-colors">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="w-full">
            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <h2 className="text-2xl font-bold text-gray-900">Kirim Pesan Anda</h2>
                    <p className="text-gray-600">Kami akan merespon pesan Anda sesegera mungkin</p>
                  </div>

                  {/* Contact Form - Following the established styling */}
                  <div className="space-y-4">
                    {/* Name and Email Row */}
                    <div className="grid grid-cols-2 gap-0">
                      <div className="relative">
                        <Input 
                          className="bg-white text-gray-800 border border-gray-300 rounded-r-none h-14 text-base"
                        />
                        <span className="absolute top-2 left-4 text-xs text-gray-500">
                          Nama Lengkap <span className="text-red-500">*</span>
                        </span>
                      </div>
                      <div className="relative">
                        <Input
                          type="email" 
                          className="bg-white text-gray-800 border border-gray-300 rounded-l-none h-14 text-base"
                        />
                        <span className="absolute top-2 left-4 text-xs text-gray-500">
                          Email <span className="text-red-500">*</span>
                        </span>
                      </div>
                    </div>

                    {/* Subject Row */}
                    <div className="relative">
                      <Input 
                        className="bg-white text-gray-800 border border-gray-300 h-14 text-base"
                      />
                      <span className="absolute top-2 left-4 text-xs text-gray-500">
                        Subjek <span className="text-red-500">*</span>
                      </span>
                    </div>

                    {/* Message Row */}
                    <div className="relative">
                      <Textarea 
                        className="bg-white text-gray-800 border border-gray-300 min-h-32 text-base resize-none"
                      />
                      <span className="absolute top-2 left-4 text-xs text-gray-500">
                        Pesan <span className="text-red-500">*</span>
                      </span>
                    </div>

                    {/* Submit Button */}
                    <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white h-14 text-base font-semibold rounded-lg">
                      Kirim Pesan
                    </Button>
                  </div>

                  <div className="text-center text-sm text-gray-500">
                    <p>
                      Dengan mengirim pesan, Anda menyetujui{" "}
                      <a href="#" className="text-blue-600 hover:underline">
                        Kebijakan Privasi
                      </a>{" "}
                      kami
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Lokasi Kantor Kami</h2>
            <p className="text-lg text-gray-600">Kunjungi kantor kami di Malang, Jawa Timur</p>
          </div>

          {/* Map Placeholder */}
          <div className="w-full h-96 bg-gray-200 rounded-2xl flex items-center justify-center">
            <div className="text-center space-y-4">
              <MapPin className="w-16 h-16 text-gray-400 mx-auto" />
              <div>
                <p className="text-lg font-semibold text-gray-600">Peta Lokasi</p>
                <p className="text-gray-500">Jln Rembuksari No. 42, Lowokwaru, Malang</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    <Footer/>
    </div>
  )
}
