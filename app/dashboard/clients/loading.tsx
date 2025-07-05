export default function Loading() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <div className="w-32 h-4 bg-gray-200 rounded-full" />
          <div className="w-48 h-4 bg-gray-200 rounded-full mt-2" />
        </div>
        <div className="w-24 h-4 bg-gray-200 rounded-full" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <div className="w-full h-24 bg-gray-200 rounded-lg" />
        </div>
      </div>
    </div>
    )
}
