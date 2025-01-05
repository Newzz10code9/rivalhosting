import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { HardDrive, Cpu, Database, Globe, Shield } from 'lucide-react';

interface MinecraftPlanProps {
  name: string;
  ram: string;
  cpu: string;
  disk: string;
  backups: string;
  databases: string;
  ports: string;
  subdomains: string;
  ddosProtection: string;
  price: string;
  index: number;
}

export function MinecraftPlan({ 
  name, ram, cpu, disk, backups, databases, 
  ports, subdomains, ddosProtection, price, index 
}: MinecraftPlanProps) {
  return (
    <motion.div
      className="bg-white shadow-lg rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="bg-red-700 text-white p-4">
        <h3 className="text-xl font-bold">{name}</h3>
      </div>
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <HardDrive className="w-5 h-5" />
            <span>{ram} RAM</span>
          </div>
          <div className="flex items-center gap-2">
            <Cpu className="w-5 h-5" />
            <span>{cpu} CPU</span>
          </div>
          <div className="flex items-center gap-2">
            <HardDrive className="w-5 h-5" />
            <span>{disk} Disk</span>
          </div>
        </div>

        <div className="space-y-2 pt-4">
          <div className="flex items-center gap-2">
            <Database className="w-5 h-5" />
            <span>{backups} Backups</span>
          </div>
          <div className="flex items-center gap-2">
            <Database className="w-5 h-5" />
            <span>{databases} SQL Databases</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5" />
            <span>{ports} Additional Ports</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5" />
            <span>{subdomains} Extra Subdomain/Custom IP</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            <span>{ddosProtection} DDoS Protection</span>
          </div>
        </div>

        <div className="pt-4">
          <p className="text-2xl font-bold text-red-700 mb-4">{price}</p>
          <Button 
            className="w-full bg-red-700 hover:bg-red-800 text-white transition-colors"
            onClick={() => window.open('https://discord.com/channels/1289016492192694314/1290624666762870806', '_blank')}
          >
            Create Ticket to Buy
          </Button>
        </div>
      </div>
    </motion.div>
  );
}