import { IMAGES } from "@/lib/images";

export function CollectionsSection() {
  return (
    <section className="py-section-gap px-edge-margin bg-surface">
      <div className="max-w-container-max mx-auto mb-16">
        <div className="flex items-center gap-6 mb-4">
          <div className="w-12 h-[1px] bg-outline-variant" />
          <span className="font-label-sm text-label-sm uppercase tracking-[0.4em] text-on-surface-variant">
            Collections
          </span>
        </div>
        <div className="flex justify-between items-end">
          <h2 className="font-title-lg text-[64px] leading-none">The Permanent Archive</h2>
          <img
            alt="FARIDAH motif"
            className="h-10 w-10 object-contain grayscale opacity-20"
            src={IMAGES.motif}
          />
        </div>
        <div className="w-full h-[1px] bg-outline-variant/30 mt-8" />
      </div>

      <div className="masonry-grid">
        <div className="item-1 group relative overflow-hidden bg-surface-container-low aspect-[3/4]">
          <img
            alt="Collection Item"
            className="w-full h-full object-cover transition-transform duration-1000 scale-105 group-hover:scale-100"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHXbB_Y32M0i9O0KzY8Xv6p8V1n_zN6l0Z7QoRz0X0B_Y32M0i9O0KzY8Xv6p8V1n_zN6l0Z7QoRz0X0B_Y32M0i9O0KzY8Xv6p8V1n_zN6l0Z7QoRz0X0"
          />
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-gutter">
            <h4 className="font-product-title text-2xl text-white">Desert Silence</h4>
            <span className="font-label-sm text-[9px] uppercase tracking-widest text-white/80">
              Eau de Parfum, 100ml
            </span>
          </div>
        </div>

        <div className="item-2 group relative overflow-hidden bg-surface-variant">
          <img
            alt="Collection Item"
            className="w-full h-full object-cover transition-transform duration-1000 scale-105 group-hover:scale-100"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBy_Z6p_N4k_X2r_Y8z_O9l_K6s_L4t_P1n_M2v_S5r_A8x_T1n_C3v_R5w_X4z_Q8k_S2b_T1n_C3v_R5w_X4z_Q8k_S2b_T1n_C3v_R5w_X4z_Q8k_S2b"
          />
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-gutter">
            <h4 className="font-product-title text-3xl text-white">Architectural Rose</h4>
            <span className="font-label-sm text-[9px] uppercase tracking-widest text-white/80">
              Pure Oil Extract, 30ml
            </span>
          </div>
        </div>

        <div className="item-3 group relative overflow-hidden bg-surface-container aspect-square">
          <img
            alt="Collection Item"
            className="w-full h-full object-cover transition-transform duration-1000 scale-105 group-hover:scale-100"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1_M3v_S5r_A8x_T1n_C3v_R5w_X4z_Q8k_S2b_T1n_C3v_R5w_X4z_Q8k_S2b_T1n_C3v_R5w_X4z_Q8k_S2b_T1n_C3v_R5w_X4z_Q8k_S2b"
          />
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-gutter">
            <h4 className="font-product-title text-2xl text-white">Morning Concrete</h4>
            <span className="font-label-sm text-[9px] uppercase tracking-widest text-white/80">
              Eau de Parfum, 50ml
            </span>
          </div>
        </div>

        <div className="item-4 group relative overflow-hidden bg-surface-container-high aspect-[2/3]">
          <img
            alt="Collection Item"
            className="w-full h-full object-cover transition-transform duration-1000 scale-105 group-hover:scale-100"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDj_T1n_C3v_R5w_X4z_Q8k_S2b_T1n_C3v_R5w_X4z_Q8k_S2b_T1n_C3v_R5w_X4z_Q8k_S2b_T1n_C3v_R5w_X4z_Q8k_S2b"
          />
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-6">
            <h4 className="font-product-title text-xl text-white">White Cedar</h4>
            <span className="font-label-sm text-[9px] uppercase tracking-widest text-white/80">
              Extrait de Parfum, 50ml
            </span>
          </div>
        </div>

        <div className="item-5 group relative overflow-hidden bg-surface-container-highest aspect-[2/3]">
          <img
            alt="Collection Item"
            className="w-full h-full object-cover transition-transform duration-1000 scale-105 group-hover:scale-100"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBy_Z6p_N4k_X2r_Y8z_O9l_K6s_L4t_P1n_M2v_S5r_A8x_T1n_C3v_R5w_X4z_Q8k_S2b_T1n_C3v_R5w_X4z_Q8k_S2b_T1n_C3v_R5w_X4z_Q8k_S2b"
          />
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-6">
            <h4 className="font-product-title text-xl text-white">Smoked Myrrh</h4>
            <span className="font-label-sm text-[9px] uppercase tracking-widest text-white/80">
              Limited Series
            </span>
          </div>
        </div>

        <div className="item-6 group relative overflow-hidden bg-surface-dim aspect-video">
          <img
            alt="Collection Item"
            className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-110"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEypAlLmpDoiTFjSth4I3Sv09Qlmw-ZxU18vpQBHbdq4AX6pFLAy0pIPJAGr4nFXD4O_vGmWk83FxjoDeQO8ZBU5wiexmTKU8nVe_c6rkQWN5itLsz3xsEA9KQDW6QmYFxOyvd_mAWLy_2c8qk6uaexEvrWKxIdFuMmBMcyrKyce-Wybk1x-FBbIubUoUEuE_xexAvtq4pR0pJzqgvyJcUVenLv1yC7stVLWpJmkwgums3RlJvO8o77Z4gBvoEEhuLm9Lc2OkCcVcF"
          />
          <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
            <h4 className="font-product-title text-3xl text-primary">Raw Amber</h4>
            <span className="font-label-sm text-[9px] uppercase tracking-widest text-secondary">
              Artisan Distillation
            </span>
          </div>
        </div>

        <div className="item-7 group relative overflow-hidden aspect-[4/5] bg-surface-container">
          <img
            alt="Collection Item"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTOT3hsUS_Hx9cC8K-LdQncxGLwqErwPVagO44HluGCxQXDyny0lvcL7XstR8Sed1zZyQbB-ykAvBj2T2JO9fhr8Cytzb9-lgnVNCGus1clCxJtPbojHPf-onJi9E2BwpnovlRagOBxxCpv1mGPkWX5RbYbyQM15nQMW-Nol1UVnW9XwDx4zsZ15pkMJcxDEmNn76v7exS0_7FOl0SP0eVFeFoJM6A9QWNftLKortK_HaQugo_ZQe4D6GZJjDZGaKm0WnctWb4bGGC"
          />
          <div className="absolute inset-0 bg-surface/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center text-center p-8">
            <div>
              <h4 className="font-product-title text-2xl text-primary mb-2 border-b border-secondary/30 pb-2">
                Silk Dust
              </h4>
              <span className="font-label-sm text-[9px] uppercase tracking-widest text-on-surface-variant">
                Powdery Notes, 100ml
              </span>
            </div>
          </div>
        </div>

        <div className="item-8 group relative aspect-square bg-surface-container-low overflow-hidden">
          <img
            alt="Collection Item"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVQIWfuvkYZ6wNah2WSBVDR0A9-3bZfE9lGC0wyS_dM9qKJvS8i9iICukdBX6F3Q8ElUTFcrO8hsAxyrmkWT_4upoXmdoLxPQoPGtIIVdqBm5_D5TZLOum7DrHPO3AHz9RwdpJanLGriEbx_E5SfGw_Qxcp6weuurdn3yvuRfphHoI7JO4Iez0k6aykaeatnLKjw1MkXCQATNIii5Dc8nAGXcz0IxItzpDQE31oKIbgZN5npJRhP93a5sG4bgXZdW0vrPBj-FdCWtg"
          />
          <div className="absolute top-4 right-4 bg-primary text-white w-8 h-8 flex items-center justify-center font-label-sm text-[8px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            NEW
          </div>
        </div>

        <div className="item-9 group relative aspect-[16/9] bg-surface-container-highest overflow-hidden">
          <img
            alt="Collection Item"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0O-MosvqF9f_JGVaX7SaxKnK2WroJkD23i4pycLX2E603ehsucl2gIdToZTnpsDo7xX7YyFNyFJCCMusir1pqxxmCXnSnJaZGQFvMJpo_4rfr7KATuOBGzjMV22YhNkd4Ke6vm_ynGDewYSOXflSOy8-WSHw-swi6W8WiCZjCFpGyQinxPFnG88h0RGrE6VKez4_KLdD9z5g_oGL1uKzIJkCqR2OoOWTx4MDQaCLbMtGKeuUG-eW72JKkcZvpblM_YAbM48FKo7kE"
          />
        </div>

        <div className="item-10 group relative aspect-[3/4] overflow-hidden">
          <img
            alt="Collection Item"
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnbt_gE4ity_7XDjia_PO-Flm3SB_e76cEl1tjhBGCyVtuiEXbliVRpDZ9YbXsQWzFWQw4W-Gcpsk2k4yNCR7gI6YaF12Xce2aFNN1w-i0bmg1DKvM3bumOxkqcuDhKTek7cmI2HBTjMDTAkdnpb-7kDvpnWPi2aT1WSqF8lP607002SbIy6G7XffJ3nAVksmZfbGWB2xZcXklHIpyCobkW2eOAZ5w5PvBfNsXApncgusrFYGmKs-l0olaFRX9ociXP7UV4ApzYXD5"
          />
        </div>

        <div className="item-11 group relative aspect-video overflow-hidden">
          <img
            alt="Collection Item"
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCx2_E2-IDteugDBaWtGziSQ801KYR8gP50Dt85CayjDjwT1uaghnO8kccSHkNUjW8ap7A7jVRg0DrC-gKsbI50MQDm2WMDpRRt9eU9QzdbukJ8e3eRUeaOEh7F-LsnBlBpDCr1pC5LpauepotYedMvwOCCS4CfJfsfUtzDm4dhsezgQMO8_NsejTGS9i0gp0ZqQU2sZjzumsoar1ojZCFBq0E-QXzNY-cG8ImRf-N2ZKI96lKVvCQ9NAflZF9DIV8xfZ9EiangGce8"
          />
        </div>

        <div className="item-12 group relative aspect-[3/4] overflow-hidden">
          <img
            alt="Collection Item"
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfUbZTGi2xN3STbyOfqzw_FjspOlQTGojBMgympz0ziyW_jSPyoO5dY2nB5sgMpy4nuOxY_VxptJSMwWj--3aFOwQbVsef-O2mN3zKclfuMEIDC8aEYreQ3k0Qf-CitDBiWerDJPc4XQJ3lMK7-oITPr62fgjGuq0MnGqmhwVi2dYJ6PZtolFNbWyJIpgezS5HM5fbPeo0dW_QNIDzLdBZBVFBNBRRhelaS7HiQi8ljkaYG4QeER7qBblhXHpTC4M5X7BiNE0JEacy"
          />
        </div>

        <div className="item-13 group relative aspect-square overflow-hidden bg-surface-container-low">
          <div className="p-8 h-full flex flex-col justify-between border border-outline-variant/30">
            <img
              alt="FARIDAH motif"
              className="h-6 w-6 grayscale opacity-10"
              src={IMAGES.motif}
            />
            <h4 className="font-product-title text-xl">The Curated Quintessence</h4>
            <p className="font-label-sm text-[10px] tracking-widest text-secondary">VOLUME I — IV</p>
          </div>
        </div>

        <div className="item-14 group relative aspect-square overflow-hidden">
          <img
            alt="Collection Item"
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEypAlLmpDoiTFjSth4I3Sv09Qlmw-ZxU18vpQBHbdq4AX6pFLAy0pIPJAGr4nFXD4O_vGmWk83FxjoDeQO8ZBU5wiexmTKU8nVe_c6rkQWN5itLsz3xsEA9KQDW6QmYFxOyvd_mAWLy_2c8qk6uaexEvrWKxIdFuMmBMcyrKyce-Wybk1x-FBbIubUoUEuE_xexAvtq4pR0pJzqgvyJcUVenLv1yC7stVLWpJmkwgums3RlJvO8o77Z4gBvoEEhuLm9Lc2OkCcVcF"
          />
        </div>

        <div className="item-15 group relative aspect-square overflow-hidden">
          <img
            alt="Collection Item"
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVQIWfuvkYZ6wNah2WSBVDR0A9-3bZfE9lGC0wyS_dM9qKJvS8i9iICukdBX6F3Q8ElUTFcrO8hsAxyrmkWT_4upoXmdoLxPQoPGtIIVdqBm5_D5TZLOum7DrHPO3AHz9RwdpJanLGriEbx_E5SfGw_Qxcp6weuurdn3yvuRfphHoI7JO4Iez0k6aykaeatnLKjw1MkXCQATNIii5Dc8nAGXcz0IxItzpDQE31oKIbgZN5npJRhP93a5sG4bgXZdW0vrPBj-FdCWtg"
          />
        </div>

        <div className="item-16 group relative aspect-video overflow-hidden">
          <img
            alt="Collection Item"
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0O-MosvqF9f_JGVaX7SaxKnK2WroJkD23i4pycLX2E603ehsucl2gIdToZTnpsDo7xX7YyFNyFJCCMusir1pqxxmCXnSnJaZGQFvMJpo_4rfr7KATuOBGzjMV22YhNkd4Ke6vm_ynGDewYSOXflSOy8-WSHw-swi6W8WiCZjCFpGyQinxPFnG88h0RGrE6VKez4_KLdD9z5g_oGL1uKzIJkCqR2OoOWTx4MDQaCLbMtGKeuUG-eW72JKkcZvpblM_YAbM48FKo7kE"
          />
        </div>

        <div className="item-17 group relative aspect-[4/5] overflow-hidden">
          <img
            alt="Collection Item"
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTOT3hsUS_Hx9cC8K-LdQncxGLwqErwPVagO44HluGCxQXDyny0lvcL7XstR8Sed1zZyQbB-ykAvBj2T2JO9fhr8Cytzb9-lgnVNCGus1clCxJtPbojHPf-onJi9E2BwpnovlRagOBxxCpv1mGPkWX5RbYbyQM15nQMW-Nol1UVnW9XwDx4zsZ15pkMJcxDEmNn76v7exS0_7FOl0SP0eVFeFoJM6A9QWNftLKortK_HaQugo_ZQe4D6GZJjDZGaKm0WnctWb4bGGC"
          />
        </div>

        <div className="item-18 group relative aspect-square overflow-hidden">
          <img
            alt="Collection Item"
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCx2_E2-IDteugDBaWtGziSQ801KYR8gP50Dt85CayjDjwT1uaghnO8kccSHkNUjW8ap7A7jVRg0DrC-gKsbI50MQDm2WMDpRRt9eU9QzdbukJ8e3eRUeaOEh7F-LsnBlBpDCr1pC5LpauepotYedMvwOCCS4CfJfsfUtzDm4dhsezgQMO8_NsejTGS9i0gp0ZqQU2sZjzumsoar1ojZCFBq0E-QXzNY-cG8ImRf-N2ZKI96lKVvCQ9NAflZF9DIV8xfZ9EiangGce8"
          />
        </div>

        <div className="item-19 group relative aspect-square overflow-hidden">
          <img
            alt="Collection Item"
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnbt_gE4ity_7XDjia_PO-Flm3SB_e76cEl1tjhBGCyVtuiEXbliVRpDZ9YbXsQWzFWQw4W-Gcpsk2k4yNCR7gI6YaF12Xce2aFNN1w-i0bmg1DKvM3bumOxkqcuDhKTek7cmI2HBTjMDTAkdnpb-7kDvpnWPi2aT1WSqF8lP607002SbIy6G7XffJ3nAVksmZfbGWB2xZcXklHIpyCobkW2eOAZ5w5PvBfNsXApncgusrFYGmKs-l0olaFRX9ociXP7UV4ApzYXD5"
          />
        </div>

        <div className="item-20 group relative aspect-square overflow-hidden">
          <img
            alt="Collection Item"
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfUbZTGi2xN3STbyOfqzw_FjspOlQTGojBMgympz0ziyW_jSPyoO5dY2nB5sgMpy4nuOxY_VxptJSMwWj--3aFOwQbVsef-O2mN3zKclfuMEIDC8aEYreQ3k0Qf-CitDBiWerDJPc4XQJ3lMK7-oITPr62fgjGuq0MnGqmhwVi2dYJ6PZtolFNbWyJIpgezS5HM5fbPeo0dW_QNIDzLdBZBVFBNBRRhelaS7HiQi8ljkaYG4QeER7qBblhXHpTC4M5X7BiNE0JEacy"
          />
        </div>
      </div>

      <div className="mt-20 flex justify-center">
        <a
          className="font-nav-link text-nav-link uppercase tracking-[0.3em] border-b border-primary pb-2 hover:text-secondary hover:border-secondary transition-all"
          href="#"
        >
          View Archive Catalogue
        </a>
      </div>
    </section>
  );
}

