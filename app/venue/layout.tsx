export default function VenueLayout
({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
	
			<div className="h-screen bg-white">
				{children}
			</div>
	);
}
