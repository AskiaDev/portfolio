declare module "*.glb" {
	const src: string;
	export default src;
}

declare module "*.gltf" {
	const src: string;
	export default src;
}

declare module "*.jpg" {
	const src: { src: string; width: number; height: number };
	export default src;
}

declare module "*.jpeg" {
	const src: { src: string; width: number; height: number };
	export default src;
}

declare module "*.JPEG" {
	const src: { src: string; width: number; height: number };
	export default src;
}

declare module "*.JPG" {
	const src: { src: string; width: number; height: number };
	export default src;
}

declare module "*.png" {
	const src: { src: string; width: number; height: number };
	export default src;
}

declare module "*.PNG" {
	const src: { src: string; width: number; height: number };
	export default src;
}

declare module "*.webp" {
	const src: { src: string; width: number; height: number };
	export default src;
}

declare module "*.svg" {
	const src: string;
	export default src;
}

declare module "*.gif" {
	const src: { src: string; width: number; height: number };
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
