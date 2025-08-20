'use client';

import {
  ArrowRight,
  BarChart3,
  Building,
  Check,
  Code,
  Globe,
  Palette,
  Sparkles,
  Star,
  Users,
  Workflow,
  Zap,
} from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { cn } from 'shared/lib/utils';
import { Button } from 'shared/ui/button';

import React from 'react';

export default function Page() {
  const features = [
    {
      icon: Sparkles,
      title: 'Enterprise App Builder',
      description:
        'Build production-ready applications faster with our visual low-code platform and unlimited customization',
    },
    {
      icon: Workflow,
      title: 'Intelligent Automation',
      description:
        'Automate complex business processes with visual workflows, API integrations, and smart data transformations',
    },
    {
      icon: Globe,
      title: 'Smart Forms & Scheduling',
      description:
        'Create dynamic forms with built-in automation, cron jobs, and seamless data collection',
    },
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description:
        'Generate insights instantly with customizable dashboards, reports, and live data visualizations',
    },
    {
      icon: Building,
      title: 'Multi-tenant Architecture',
      description:
        'Scale securely with namespace-based data isolation, perfect for enterprise and multi-client environments',
    },
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description:
        'From concept to production in minutes with our optimized build and deployment pipeline',
    },
  ];

  const testimonials = [
    {
      name: 'Alex Thompson',
      role: 'CTO, TechCorp',
      content:
        'VelociLogic transformed our development workflow. We shipped 3 enterprise apps in the time it used to take for one.',
      rating: 5,
    },
    {
      name: 'Maria Garcia',
      role: 'Operations Director',
      content:
        'The automation capabilities are incredible. We eliminated 40 hours of manual work per week across our team.',
      rating: 5,
    },
    {
      name: 'James Wilson',
      role: 'Product Manager',
      content:
        "Finally, a platform that doesn't limit our technical team while empowering our business users.",
      rating: 5,
    },
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$0',
      period: 'forever',
      features: [
        '3 applications',
        'Basic automation',
        'Community support',
        '1GB data storage',
        'Standard templates',
      ],
      cta: 'Start Free',
      popular: false,
    },
    {
      name: 'Professional',
      price: '$49',
      period: 'month',
      features: [
        'Unlimited applications',
        'Advanced workflows',
        'Priority support',
        '50GB data storage',
        'Custom integrations',
        'Advanced analytics',
        'White-label options',
      ],
      cta: 'Start 14-Day Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact us',
      features: [
        'Everything in Professional',
        'Dedicated infrastructure',
        'SLA guarantees',
        'Custom training',
        'Advanced security',
        '24/7 premium support',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  const stats = [
    { label: 'Active Users', value: '50K+' },
    { label: 'Apps Built', value: '100K+' },
    { label: 'Time Saved', value: '2M+ hrs' },
    { label: 'Enterprise Clients', value: '500+' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6 flex justify-center">
                <div className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900 dark:text-blue-200">
                  ✨ Trusted by 500+ Enterprise Teams
                </div>
              </div>
              <h1 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
                Build Enterprise Apps
                <span className="block text-blue-600 dark:text-blue-400">
                  10x Faster
                </span>
              </h1>
              <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-600 sm:text-xl dark:text-gray-300">
                The only platform you need to create enterprise applications,
                automate workflows, and build custom dashboards—all with the
                power of low-code and the flexibility of custom development.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link href="/auth?mode=signup">
                  <Button
                    size="lg"
                    className="w-full bg-blue-600 px-8 py-4 text-lg text-white shadow-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 sm:w-auto dark:bg-blue-500 dark:text-white dark:hover:bg-blue-400 dark:focus:ring-blue-900"
                  >
                    Start Building Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/demo">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full border-2 border-blue-600 px-8 py-4 text-lg text-blue-600 hover:bg-blue-50 focus:ring-4 focus:ring-blue-200 sm:w-auto dark:border-blue-400 dark:text-blue-200 dark:hover:bg-blue-400/10 dark:focus:ring-blue-900"
                  >
                    Watch Demo
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 grid grid-cols-2 gap-4 text-center sm:mt-20 lg:grid-cols-4"
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="rounded-lg bg-white/60 p-4 backdrop-blur-sm lg:p-6 dark:bg-gray-900/60"
              >
                <div className="text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 sm:text-base dark:text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        {/* Floating Elements */}
        <div className="absolute top-20 left-4 opacity-20 sm:left-10">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="hidden sm:block"
          >
            <Sparkles className="h-6 w-6 text-blue-500 sm:h-8 sm:w-8 dark:text-blue-400" />
          </motion.div>
        </div>
        <div className="absolute top-40 right-4 opacity-20 sm:right-20">
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="hidden sm:block"
          >
            <Globe className="h-8 w-8 text-indigo-500 sm:h-12 sm:w-12 dark:text-indigo-400" />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-12 sm:py-20 dark:bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
                Powerful Features for Modern Teams
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-600 sm:text-xl dark:text-gray-300">
                Everything your team needs to build, automate, and scale
                enterprise applications without the traditional complexity.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-blue-200 hover:shadow-xl dark:border-gray-800 dark:bg-neutral-900 dark:hover:border-blue-400"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 transition-colors duration-300 group-hover:bg-blue-200 dark:bg-blue-900 dark:group-hover:bg-blue-800">
                  <feature.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-12 sm:py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
                Trusted by Industry Leaders
              </h2>
              <p className="text-lg text-gray-600 sm:text-xl dark:text-gray-300">
                See how teams are accelerating their development with
                VelociLogic
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="rounded-xl bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg dark:bg-gray-800"
              >
                <div className="mb-4 flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-current text-yellow-400 sm:h-5 sm:w-5"
                    />
                  ))}
                </div>
                <p className="mb-4 text-sm leading-relaxed text-gray-600 sm:text-base dark:text-gray-300">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-white py-12 sm:py-20 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
                Transparent Pricing That Scales
              </h2>
              <p className="text-lg text-gray-600 sm:text-xl dark:text-gray-300">
                Start free and upgrade as your team grows
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className={`relative rounded-xl border-2 bg-white p-6 transition-all duration-300 hover:shadow-lg sm:p-8 dark:bg-gray-900 ${
                  plan.popular
                    ? 'scale-105 border-blue-500 shadow-lg lg:scale-110 dark:border-blue-400'
                    : 'border-gray-200 hover:border-blue-200 dark:border-gray-800 dark:hover:border-blue-400'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 transform">
                    <span className="rounded-full bg-blue-500 px-3 py-1 text-sm font-medium text-white sm:px-4 dark:bg-blue-400 dark:text-gray-900">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-6 text-center">
                  <h3 className="mb-2 text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
                      {plan.price}
                    </span>
                    {plan.price !== 'Custom' && (
                      <span className="ml-1 text-gray-500 dark:text-gray-400">
                        /{plan.period}
                      </span>
                    )}
                  </div>
                </div>
                <ul className="mb-8 space-y-3">
                  {plan.features.map(feature => (
                    <li key={feature} className="flex items-start">
                      <Check className="mt-0.5 mr-3 h-4 w-4 flex-shrink-0 text-green-500 sm:h-5 sm:w-5 dark:text-green-400" />
                      <span className="text-sm text-gray-600 sm:text-base dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.popular ? 'default' : 'outline'}
                  className={cn(
                    'w-full transition-all duration-300',
                    plan.popular
                      ? 'bg-blue-600 text-white shadow-lg hover:bg-blue-700 hover:shadow-xl focus:ring-4 focus:ring-blue-200 dark:bg-blue-500 dark:text-white dark:hover:bg-blue-400 dark:focus:ring-blue-900'
                      : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-4 focus:ring-blue-200 dark:border-blue-400 dark:text-blue-200 dark:hover:bg-blue-400/10 dark:focus:ring-blue-900'
                  )}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-12 sm:py-16 dark:from-blue-900 dark:to-indigo-950">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 flex items-center justify-center space-x-2">
              <Users className="h-6 w-6 text-blue-200 dark:text-blue-300" />
              <span className="text-blue-200 dark:text-blue-300">
                Join the growing community
              </span>
            </div>
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Ready to Transform Your Development?
            </h2>
            <p className="mb-8 text-lg text-blue-100 sm:text-xl dark:text-blue-200">
              Start building enterprise-grade applications today. No credit card
              required.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/auth?mode=signup">
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full bg-white px-8 py-4 text-lg text-blue-600 shadow-lg hover:bg-gray-50 hover:shadow-xl focus:ring-4 focus:ring-white/20 sm:w-auto dark:bg-gray-900 dark:text-blue-400 dark:hover:bg-gray-800 dark:focus:ring-blue-900"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-2 border-white bg-transparent px-8 py-4 text-lg text-white hover:bg-white hover:text-blue-600 focus:ring-4 focus:ring-white/20 sm:w-auto dark:border-blue-400 dark:bg-transparent dark:text-blue-200 dark:hover:bg-white dark:hover:text-blue-600 dark:focus:ring-blue-900"
                >
                  Talk to Sales
                </Button>
              </Link>
            </div>
            <div className="mt-6 text-sm text-blue-200 dark:text-blue-300">
              Free forever • No setup fees • Cancel anytime
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
