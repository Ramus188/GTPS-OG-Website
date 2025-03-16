import { useRoute, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, ClipboardCopyIcon, CheckIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Tutorial() {
  const [, params] = useRoute("/tutorial/:platform");
  const platform = params?.platform;
  const [copied, setCopied] = useState(false);

  const copyTextData: Record<string, string> = {
    windows: `194.62.248.117 growtopia1.com
194.62.248.117 growtopia2.com
194.62.248.117 www.growtopia1.com
194.62.248.117 www.growtopia2.com
194.62.248.117 RvLnd.here`,
    macos: `194.62.248.117 growtopia1.com
194.62.248.117 growtopia2.com
194.62.248.117 www.growtopia1.com
194.62.248.117 www.growtopia2.com
194.62.248.117 RvLnd.here`,
    android: `194.62.248.117 growtopia1.com
194.62.248.117 growtopia2.com`,
    ios: `[General]
bypass-system = true

[Rule]
FINAL,DIRECT

[Host]
growtopia1.com = 107.175.219.128
growtopia2.com = 107.175.219.128
www.growtopia1.com = 107.175.219.128
www.growtopia2.com = 107.175.219.128
RvLnd.here = 107.175.219.128`,
  };

  const copyText = copyTextData[platform || "windows"] || "";

  const handleCopy = () => {
    navigator.clipboard.writeText(copyText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const tutorials = {
    windows: {
      title: "How to play GTPS OG On Windows.",
      content: (
        <>
          Step 1: First download Notepad++, or use the default Windows Notepad.
          <br />
          Step 2: Open the file{" "}
          <code>C:\Windows\System32\drivers\etc\hosts</code>.
          <br />
          Step 3: Paste the following line into the file:
        </>
      ),
    },
    macos: {
      title: "How to play GTPS OG On macOS.",
      content: (
        <>
          Step 1: Open the Terminal.
          <br />
          Step 2: Type <code>sudo nano /etc/hosts</code> and press Enter.
          <br />
          Step 3: Paste the following line into the file:
        </>
      ),
    },
    android: {
      title: "How to play GTPS OG On Android.",
      content: (
        <>
          Step 1: Use PowerTunnel
          <br />
          Step 2: Click on the "Powertunnel" button.
          <br />
          Step 3: Paste the following line into the file: 
        </>
      ),
    },
    ios: {
      title: "How to play GTPS OG On iOS.",
      content: (
        <>
          Step 1: Download Surge 5 On AppStore.
          <br />
          Step 2: Select default at the top lefthand corner.
          <br />
          Step 3: Select edit in Text Mode
          <br />
          Step 4: Paste the following line into the file:
          <br />
          Step 5: Press done, and done again, and select start/setup on the top
          righthand corner.
        </>
      ),
    },
  };

  const tutorial = tutorials[platform as keyof typeof tutorials];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-green-400 to-orange-500 text-transparent bg-clip-text">
            {tutorial?.title}
          </h1>

          <div className="prose prose-invert max-w-none">
            <p>{tutorial?.content}</p>
          </div>

          <div className="relative bg-gray-800 text-white p-4 rounded-md mt-4">
            <pre className="whitespace-pre-wrap break-words">{copyText}</pre>
            <button
              onClick={handleCopy}
              className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 p-2 rounded-lg transition"
            >
              {copied ? (
                <CheckIcon className="w-5 h-5 text-green-400" />
              ) : (
                <ClipboardCopyIcon className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
