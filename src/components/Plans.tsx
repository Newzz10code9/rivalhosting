import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const vpsPlans = [
  {
    name: "2GB RAM VPS",
    price: "300rs/month",
    description: "Perfect for small projects, lightweight apps, and testing.",
  },
  {
    name: "4GB RAM VPS",
    price: "600rs/month",
    description: "Ideal for hosting small websites or moderate game servers.",
  },
  {
    name: "8GB RAM VPS",
    price: "800rs/month",
    description: "Excellent for multiple apps, websites, or larger game servers.",
  },
  {
    name: "16GB RAM VPS",
    price: "1500rs/month",
    description: "Great for heavy apps, databases, and advanced gaming.",
  },
  {
    name: "32GB RAM VPS",
    price: "2500rs/month",
    description: "Optimal for high-traffic sites, virtualization, and intense workloads.",
  },
  {
    name: "64GB RAM VPS",
    price: "3000rs/month",
    description: "Ultimate power for enterprise apps and big data projects.",
  }
];

function PlanCard({ plan, index }: { plan: any; index: number }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <motion.div 
        className="bg-white shadow-lg rounded-lg overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="bg-red-700 text-white p-4">
          <h3 className="text-xl font-bold">{plan.name}</h3>
        </div>
        <div className="p-6">
          <p className="text-2xl font-bold text-red-700 mb-4">{plan.price}</p>
          <p className="text-gray-600 mb-6">{plan.description}</p>
          <Button 
            className="w-full bg-red-700 hover:bg-red-800 text-white transition-colors"
            onClick={() => setShowModal(true)}
          >
            Choose Plan
          </Button>
        </div>
      </motion.div>

      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle className="text-red-700">Contact Us</DialogTitle>
            <DialogDescription>
              To proceed with your chosen plan, please contact us through one of the following methods:
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <p>
              <strong>Discord:</strong>{' '}
              <a 
                href="https://discord.gg/rivalnodes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-red-700 hover:text-red-800 underline"
              >
                Join our Discord server
              </a>
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <a 
                href="mailto:barrieryadav@gmail.com"
                className="text-red-700 hover:text-red-800 underline"
              >
                barrieryadav@gmail.com
              </a>
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export function Plans() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-red-50 to-red-100">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-red-800 mb-4">Dragoon Dedicated Hosting - VPS Plans</h1>
          <p className="text-red-900 text-lg">Choose the perfect VPS plan for your hosting needs</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vpsPlans.map((plan, index) => (
            <PlanCard key={index} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}