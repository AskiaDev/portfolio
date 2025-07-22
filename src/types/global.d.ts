declare module "*.glb" {
	const src: string;
	export default src;
}

declare module "*.gltf" {
	const src: string;
	export default src;
}

declare module "meshline" {
	export class MeshLineGeometry extends THREE.BufferGeometry {
		setPoints(points: THREE.Vector3[]): void;
	}

	export class MeshLineMaterial extends THREE.Material {
		constructor(options?: {
			color?: string | number;
			thickness?: number;
			opacity?: number;
			transparent?: boolean;
		});
	}
}
