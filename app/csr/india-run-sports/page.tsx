"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Route, CheckCircle2, Trophy, Heart, Users, Target } from "lucide-react"
import { Navbar } from "@/components/navbar"

export default function IndiaRunSportsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative h-[400px] flex items-center justify-center overflow-hidden mt-28">
        <div className="absolute inset-0 z-0">
          <Image src="/mega-menu-construction.jpg" alt="India Run Sports" fill className="object-cover brightness-50" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">India Run Sports</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Promoting fitness and sports participation across communities
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                <Route className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">IRA DHYEYA SPORTS FOUNDATION</h2>
                <p className="text-muted-foreground">National-Level Sports & Fitness Initiative</p>
              </div>
            </div>

            <div className="bg-primary/5 rounded-lg p-8 mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                IRA Dhyeya Sports Foundation is a national-level non-profit organization (Section 8 Company) dedicated
                to promoting sports, fitness, health awareness, and youth empowerment across India. The foundation works
                to strengthen the sports culture in the country, provide opportunities to young athletes, and encourage
                a healthier lifestyle in society.
              </p>
            </div>

            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Trophy className="w-8 h-8 text-primary" />
                India Run Sports – Sports Development Initiative
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                India Run Sports is the foundation's primary sports development mission aimed at promoting sports across
                India and connecting people of all ages with fitness activities.
              </p>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-4">Key Activities</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Sports training for children, youth, and the general public</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Fitness and athletics coaching</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Supporting the Fit India Movement</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Organizing awareness runs, fitness drives, and training camps</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Providing sports opportunities in both rural and urban regions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <div className="bg-primary/5 rounded-lg p-6 mb-8">
                <h4 className="font-bold text-lg mb-2">Objective</h4>
                <p className="text-muted-foreground">
                  To realize the vision of <strong>"Fit India – Strong India"</strong> and promote sportsmanship and a
                  healthy lifestyle nationwide.
                </p>
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Route className="w-8 h-8 text-primary" />
                India Run Marathon – National Fitness Movement
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                India Run Marathon is a national-level running and fitness initiative designed to spread awareness about
                health, running, and wellness across India.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold mb-4">Major Activities</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>State-level and national-level marathons</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Fitness camps and workshops</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Youth motivation programs</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Awareness runs focusing on environmental and social causes</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>A Pan-India Run Mission covering all 28 states and their capitals</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold mb-4">Social Impact</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Anti-drug awareness campaigns</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>"Run for Nature – Save Environment" initiatives</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Youth empowerment and mental health awareness drives</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Heart className="w-8 h-8 text-primary" />
                CSR Contribution to Society
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                IRA Dhyeya Sports Foundation is actively involved in the following CSR focus areas:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Trophy className="w-6 h-6 text-primary" />
                      <h4 className="text-xl font-bold">Sports for Development</h4>
                    </div>
                    <p className="text-muted-foreground">
                      Identifying sports talent, providing training, and supporting athletes in their professional
                      journey.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Users className="w-6 h-6 text-primary" />
                      <h4 className="text-xl font-bold">Youth Empowerment</h4>
                    </div>
                    <p className="text-muted-foreground">
                      Strengthening youth physically and mentally while guiding them toward a bright future.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Heart className="w-6 h-6 text-primary" />
                      <h4 className="text-xl font-bold">Health & Wellness Awareness</h4>
                    </div>
                    <p className="text-muted-foreground">
                      Promoting health through fitness programs, sports events, health camps, and running initiatives.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Target className="w-6 h-6 text-primary" />
                      <h4 className="text-xl font-bold">Community Development Programs</h4>
                    </div>
                    <p className="text-muted-foreground">
                      Environmental protection campaigns, social awareness events, and fitness culture promotion in
                      rural communities.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                IRA Dhyeya Sports Foundation believes that{" "}
                <strong>sports are not just an activity but a powerful pillar of national development.</strong>
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our goal is to ensure that every individual becomes healthier, motivated, and an active contributor to
                nation-building through sports and fitness.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">Join the Movement</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
