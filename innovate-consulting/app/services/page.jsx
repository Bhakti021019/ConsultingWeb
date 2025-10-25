"use client"
import { motion } from "framer-motion";
import ServiceDetail from '../components/ServiceDetail';
import ServiceOverview from '../components/ServiceOverview';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export default function ServicesPage() {
    const services = [
    {
      title: "Business Strategy Consulting",
      image: "/BusinessStrategy.jpg",
      description: [
        "Our Business Strategy Consulting services help organizations define their vision, mission, and long-term objectives with clarity and precision. By leveraging both quantitative data and qualitative insights, we identify growth opportunities and competitive advantages that ensure sustainable market leadership.",
        "We collaborate closely with leadership teams to design actionable strategies that align operational capabilities with market demands. From crafting strategic roadmaps to setting measurable KPIs, our approach ensures that every decision contributes to long-term profitability and efficiency.",
        "Through rigorous market analysis, competitor benchmarking, and performance tracking frameworks, we empower businesses to make informed decisions that drive tangible results. Our consultants also facilitate scenario planning and risk assessments to anticipate market shifts and stay ahead of challenges.",
        "Ultimately, our strategy consulting aims to build resilient organizations that can adapt to changing market conditions, optimize resource allocation, and achieve ambitious growth targets with confidence."
      ],
      includes: [
        "Market analysis & competitive benchmarking",
        "Strategic planning & goal alignment",
        "Performance tracking frameworks",
        "KPI and success metric design",
      ],
      targetAudience:
        "Mid-sized and large enterprises looking to scale operations or enter new markets.",
      outcomes: [
        "Clear roadmap for sustainable growth",
        "Improved decision-making through actionable insights",
        "Enhanced organizational efficiency",
      ],
      caseStudy: {
        title: "Scaling a Manufacturing Firm",
        summary:
          "We helped a mid-sized manufacturer increase profitability by 27% through better cost management and new market entry planning.",
      },
    },
    {
      title: "Digital Transformation Consulting",
      image: "/Digital transformation.jpg",
      description: [
      "Our Digital Transformation Consulting services guide organizations through the complex journey of technology adoption and process optimization. We ensure that digital initiatives are closely tied to business objectives and provide measurable improvements in efficiency and customer engagement.",
      "We assess existing workflows, identify bottlenecks, and design technology roadmaps that enhance automation, collaboration, and operational agility. By leveraging cloud-based solutions, workflow optimization tools, and data analytics, we help businesses unlock significant performance gains.",
      "Our consultants focus on aligning digital transformation with workforce readiness, change management, and cultural adoption. This ensures smooth transitions, minimal disruption, and maximum impact from every technology initiative.",
      "Through a combination of strategy, technology integration, and continuous monitoring, we help organizations achieve scalable digital solutions that improve customer experiences, reduce manual workloads, and future-proof operations in a rapidly evolving digital landscape."
      ],
      includes: [
        "Digital readiness assessment",
        "Technology roadmap creation",
        "Automation and workflow optimization",
        "Cloud adoption strategy",
      ],
      targetAudience:
        "Organizations seeking to modernize legacy systems and optimize business processes using technology.",
      outcomes: [
        "Increased operational efficiency",
        "Reduced manual workloads",
        "Enhanced digital customer experiences",
      ],
      caseStudy: {
        title: "Retail Chain Modernization",
        summary:
          "A retail chain implemented a digital POS and cloud system with our guidance, reducing manual work by 40% and improving data accuracy.",
      },
    },
    {
      title: "Financial Performance Advisory",
      image: "Financial analysis.jpg",
      description: [
      "Our Financial Performance Advisory services aim to strengthen an organization’s financial health and provide actionable insights for sustainable growth. We help businesses optimize cash flow, improve profit margins, and make informed investment decisions that maximize ROI.",
      "We provide detailed financial planning, budgeting, forecasting, and risk management strategies tailored to your organization’s unique goals and market conditions. Our approach emphasizes data-driven decision-making and long-term financial resilience.",
      "By analyzing cost structures, identifying inefficiencies, and optimizing resource allocation, we help organizations achieve improved operational efficiency and profitability. Our services also include investment analysis, ROI tracking, and capital allocation strategies.",
      "Ultimately, our advisory helps businesses achieve financial clarity, reduce unnecessary expenses, and implement practices that support informed strategic decisions and sustainable growth."
      ],
      includes: [
        "Financial planning and forecasting",
        "Budget optimization",
        "Cost reduction strategies",
        "Investment analysis and ROI tracking",
      ],
      targetAudience:
        "SMEs and enterprises aiming to improve their financial management and performance.",
      outcomes: [
        "Better control over financial resources",
        "Optimized cost structures",
        "Data-driven decision making",
      ],
      caseStudy: {
        title: "Profitability Improvement for an SME",
        summary:
          "We identified unnecessary cost centers for an SME, resulting in a 15% increase in quarterly profits.",
      },
    },
    {
      title: "Organizational Development & Change Management",
      image: "Organizational Development & Change Management.png",
      description: [
      "Our Organizational Development and Change Management services help businesses navigate transformation effectively, minimizing resistance and maximizing employee engagement. We focus on leadership development, culture transformation, and structured change processes.",
      "We assess organizational readiness, identify gaps, and design tailored change strategies that align people, processes, and systems. By fostering communication, collaboration, and accountability, we ensure that transitions are smooth and well-received.",
      "Our programs include leadership coaching, employee engagement initiatives, and strategic communication planning to reinforce desired behaviors and cultural shifts. We help leaders champion change and maintain momentum throughout the transformation process.",
      "By implementing structured frameworks and continuous feedback loops, we ensure that organizational changes are sustainable, measurable, and positively impact productivity, employee satisfaction, and overall business performance."
      ],
      includes: [
        "Change readiness assessment",
        "Leadership development programs",
        "Employee engagement initiatives",
        "Culture and communication strategy",
      ],
      targetAudience:
        "Businesses undergoing restructuring, mergers, or major cultural transformation.",
      outcomes: [
        "Stronger employee alignment with company goals",
        "Smooth transition during organizational change",
        "Sustainable productivity improvements",
      ],
      caseStudy: {
        title: "Post-Merger Integration Success",
        summary:
          "We facilitated post-merger change management for a logistics company, improving employee retention by 22%.",
      },
    },
    {
      title: "Market Entry & Expansion Strategy",
      image: "Market Entry & Expansion Strategy.jpg",
      description: [
      "Our Market Entry and Expansion Strategy services assist businesses in entering new markets with minimal risk and maximum potential. We combine market research, competitive analysis, and regulatory assessment to create actionable expansion roadmaps.",
      "We help clients understand target customers, assess competitor strengths and weaknesses, and develop effective go-to-market strategies. This includes product localization, pricing strategies, and operational planning to ensure market success.",
      "Our consultants also provide scenario analysis, risk mitigation strategies, and resource allocation guidance to support informed and confident decision-making during expansion.",
      "By leveraging these insights and frameworks, we help businesses accelerate growth, optimize market entry, and establish a strong presence in new regions while maximizing profitability and minimizing challenges."
      ],
      includes: [
        "Market research & feasibility study",
        "Competitive landscape analysis",
        "Go-to-market strategy",
        "Localization & pricing strategy",
      ],
      targetAudience:
        "Businesses expanding into new geographic regions or launching new products.",
      outcomes: [
        "Informed entry decisions with reduced risk",
        "Faster time-to-market",
        "Increased brand recognition in new regions",
      ],
      caseStudy: {
        title: "Tech Startup Expansion in Southeast Asia",
        summary:
          "We guided a SaaS startup’s expansion into Indonesia and Malaysia, achieving a 30% revenue increase in 6 months.",
      },
    },
    {
      title: "Sustainability & ESG Consulting",
      image: "ESG Sustainability Concept.jpg",
      description: [
      "Our Sustainability and ESG Consulting services help organizations integrate environmental, social, and governance considerations into their core strategy. We guide companies to achieve compliance, enhance reputation, and attract investment while creating long-term value.",
      "We analyze environmental impacts, assess social responsibility initiatives, and evaluate governance frameworks to design strategies that are both practical and measurable. Our consultants help organizations identify opportunities to reduce carbon footprint and operational waste.",
      "Through ESG reporting, stakeholder engagement, and sustainability roadmap development, we ensure that companies are not only compliant with global standards but also recognized as responsible and forward-thinking leaders.",
      "Ultimately, our services support improved ESG ratings, enhanced stakeholder trust, and measurable sustainability performance, enabling organizations to create lasting positive impacts while strengthening business outcomes."
      ],
      includes: [
        "Sustainability strategy development",
        "Carbon footprint analysis",
        "ESG reporting and compliance",
        "Stakeholder engagement planning",
      ],
      targetAudience:
        "Corporates seeking to improve sustainability performance and meet ESG disclosure standards.",
      outcomes: [
        "Improved ESG ratings",
        "Reduced environmental impact",
        "Enhanced stakeholder trust and brand value",
      ],
      caseStudy: {
        title: "ESG Roadmap for a Manufacturing Client",
        summary:
          "We developed a sustainability roadmap that helped reduce carbon emissions by 18% in one year.",
      },
    },
  ];
  return (
    <main className='flex flex-col items-center justify-center py-16'>
      <ServiceOverview />
      {services.map((service, index) => (
        <motion.div
        key={index}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{once : true, amount: 0.2}}
        >
          <ServiceDetail {...service}/>
        </motion.div>
      ))}
    </main>
  );
}
