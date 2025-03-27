import { motion } from "framer-motion"

export default function BasicsOfMotion() {
    return (
        <section className="w-full max-w-[1400px] mx-auto items-center flex flex-col px-6">
            <div className="w-[100px] h-[100px] bg-blue-900"></div>

                {/* create, collaborate, complete section */}
                {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <motion.div
                        whileHover={{ scale: 1.05, rotate: -5, transition: { duration: 0.2 } }}
                        className="w-full bg-[#C6D1DE] bg-opacity-20 rounded-xl p-8 md:p-12 flex flex-col gap-6 text-center items-center"
                    >
                        <h2 className="font-bold text-2xl md:text-3xl">Create</h2>
                        <p className="text-lg md:text-xl">Clients create jobs and post them to the marketplace</p>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05, rotate: 5, transition: { duration: 0.2 } }}
                        className="w-full bg-[#C6D1DE] bg-opacity-20 rounded-xl p-8 md:p-12 flex flex-col gap-6 text-center items-center"
                    >
                        <h2 className="font-bold text-2xl md:text-3xl">Collaborate</h2>
                        <p className="text-lg md:text-xl">Select engineers from your list of bids on that job to work through the approval process with.</p>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05, rotate: -5, transition: { duration: 0.2 } }}
                        className="w-full bg-[#C6D1DE] bg-opacity-20 rounded-xl p-8 md:p-12 flex flex-col gap-6 text-center items-center"
                    >
                        <h2 className="font-bold text-2xl md:text-3xl">Complete</h2>
                        <p className="text-lg md:text-xl">Stamped deliverables sent directly on platform end the approval process.</p>
                    </motion.div>
                </div> */}

        </section>
    )
}