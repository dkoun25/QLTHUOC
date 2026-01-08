// ====================================
// PHARMACY PRO - SPA ROUTER
// ====================================

// Page Components/Templates
const pages = {
    'dashboard': {
        title: 'Dashboard',
        template: () => `
            <div class="max-w-[1200px] mx-auto flex flex-col gap-6">
                <!-- KPI Cards -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div class="flex flex-col gap-3 rounded-xl bg-white p-5 border border-[#dbe0e6] shadow-sm hover:shadow-md transition-shadow">
                        <div class="flex items-center justify-between">
                            <div class="bg-blue-50 text-primary p-2 rounded-lg">
                                <span class="material-symbols-outlined icon-fill">inventory_2</span>
                            </div>
                            <span class="bg-green-50 text-green-700 text-xs font-medium px-2 py-1 rounded">+5 mới</span>
                        </div>
                        <div>
                            <p class="text-[#617589] text-sm font-medium mb-1">Tổng số thuốc (SKU)</p>
                            <p class="text-[#111418] text-2xl font-bold">${window.DB.thuoc.length}</p>
                        </div>
                    </div>
                    <div class="flex flex-col gap-3 rounded-xl bg-white p-5 border border-[#dbe0e6] shadow-sm hover:shadow-md transition-shadow ring-1 ring-red-50">
                        <div class="flex items-center justify-between">
                            <div class="bg-red-50 text-red-600 p-2 rounded-lg">
                                <span class="material-symbols-outlined icon-fill">alarm</span>
                            </div>
                            <span class="bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded">Cấp bách</span>
                        </div>
                        <div>
                            <p class="text-[#617589] text-sm font-medium mb-1">Sắp hết hạn (≤30 ngày)</p>
                            <p class="text-[#111418] text-2xl font-bold">${getSapHetHan().length}</p>
                        </div>
                    </div>
                    <div class="flex flex-col gap-3 rounded-xl bg-white p-5 border border-[#dbe0e6] shadow-sm hover:shadow-md transition-shadow">
                        <div class="flex items-center justify-between">
                            <div class="bg-orange-50 text-orange-600 p-2 rounded-lg">
                                <span class="material-symbols-outlined icon-fill">warning</span>
                            </div>
                            <span class="bg-orange-100 text-orange-700 text-xs font-medium px-2 py-1 rounded">Cần nhập</span>
                        </div>
                        <div>
                            <p class="text-[#617589] text-sm font-medium mb-1">Sắp hết hàng</p>
                            <p class="text-[#111418] text-2xl font-bold">${getSapHetHang().length}</p>
                        </div>
                    </div>
                    <div class="flex flex-col gap-3 rounded-xl bg-white p-5 border border-[#dbe0e6] shadow-sm hover:shadow-md transition-shadow">
                        <div class="flex items-center justify-between">
                            <div class="bg-green-50 text-green-600 p-2 rounded-lg">
                                <span class="material-symbols-outlined icon-fill">payments</span>
                            </div>
                            <span class="bg-green-50 text-green-700 text-xs font-medium px-2 py-1 rounded">+12%</span>
                        </div>
                        <div>
                            <p class="text-[#617589] text-sm font-medium mb-1">Doanh thu hôm nay</p>
                            <p class="text-[#111418] text-2xl font-bold">${formatCurrency(getDoanhThuHomNay())}</p>
                        </div>
                    </div>
                </div>

                <!-- Charts & Table -->
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <!-- Revenue Chart -->
                    <div class="lg:col-span-2 flex flex-col rounded-xl bg-white border border-[#dbe0e6] shadow-sm overflow-hidden">
                        <div class="flex flex-wrap items-center justify-between p-5 border-b border-[#f0f2f4] gap-2">
                            <div>
                                <p class="text-[#111418] text-base font-bold">Doanh thu 7 ngày qua</p>
                                <p class="text-[#617589] text-sm">Tổng: <span class="text-[#111418] font-semibold">${formatCurrency(getDoanhThu7Ngay())}</span></p>
                            </div>
                        </div>
                        <div class="p-6 h-64 flex items-center justify-center text-gray-400">
                            <span class="material-symbols-outlined text-6xl">insert_chart</span>
                        </div>
                    </div>

                    <!-- Stock Distribution -->
                    <div class="flex flex-col rounded-xl bg-white border border-[#dbe0e6] shadow-sm">
                        <div class="p-5 border-b border-[#f0f2f4]">
                            <p class="text-[#111418] text-base font-bold">Tồn kho theo nhóm</p>
                            <p class="text-[#617589] text-sm">Hiện tại</p>
                        </div>
                        <div class="p-6 flex flex-col gap-6">
                            ${renderStockDistribution()}
                        </div>
                    </div>
                </div>

                <!-- Warning Table -->
                <div class="flex flex-col gap-4">
                    <div class="flex items-center justify-between">
                        <h3 class="text-[#111418] text-lg font-bold leading-tight flex items-center gap-2">
                            <span class="material-symbols-outlined text-red-500">report</span>
                            Cảnh báo cần xử lý
                        </h3>
                        <button class="text-primary text-sm font-medium hover:underline">Xem tất cả</button>
                    </div>
                    ${renderWarningTable()}
                </div>
            </div>
        `
    },
    
    'ds-thuoc': {
        title: 'Danh sách thuốc',
        template: () => `
            <div class="max-w-[1400px] mx-auto">
                <div class="flex justify-between items-center mb-6">
                    <h1 class="text-2xl font-bold">Danh sách thuốc</h1>
                    <button class="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                        <span class="material-symbols-outlined inline-block align-middle mr-2">add</span>
                        Thêm thuốc mới
                    </button>
                </div>
                ${renderDanhSachThuoc()}
            </div>
        `
    },

    'ban-thuoc-pos': {
        title: 'Bán thuốc POS',
        template: () => `<div class="text-center py-20"><h2 class="text-2xl font-bold">Bán thuốc POS</h2><p class="text-gray-500 mt-2">Giao diện POS đang được phát triển...</p></div>`
    },

    'ds-khach-hang': {
        title: 'Danh sách Khách hàng',
        template: () => `<div class="text-center py-20"><h2 class="text-2xl font-bold">Danh sách Khách hàng</h2></div>`
    },

    'ds-nha-cung-cap': {
        title: 'Danh sách Nhà cung cấp',
        template: () => `<div class="text-center py-20"><h2 class="text-2xl font-bold">Danh sách Nhà cung cấp</h2></div>`
    },

    'bao-cao-doanh-thu': {
        title: 'Báo cáo Doanh thu',
        template: () => `<div class="text-center py-20"><h2 class="text-2xl font-bold">Báo cáo Doanh thu</h2></div>`
    },

    'bao-cao-ton-kho': {
        title: 'Báo cáo Tồn kho',
        template: () => `<div class="text-center py-20"><h2 class="text-2xl font-bold">Báo cáo Tồn kho</h2></div>`
    },

    'don-vi-tinh': {
        title: 'Đơn vị tính',
        template: () => `<div class="text-center py-20"><h2 class="text-2xl font-bold">Quản lý Đơn vị tính</h2></div>`
    },

    // Add more pages as needed...
};

// Helper Functions
function formatCurrency(amount) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
}

function getSapHetHan() {
    const today = new Date();
    const days30 = 30 * 24 * 60 * 60 * 1000;
    return window.DB.thuoc.filter(t => {
        const expDate = new Date(t.hanSuDung);
        return (expDate - today) <= days30 && (expDate - today) >= 0;
    });
}

function getSapHetHang() {
    return window.DB.thuoc.filter(t => t.tonKho <= t.dinhmucToiThieu);
}

function getDoanhThuHomNay() {
    const today = new Date().toISOString().split('T')[0];
    return window.DB.hoaDonBanLe
        .filter(hd => hd.ngayBan.startsWith(today))
        .reduce((sum, hd) => sum + hd.tongTien, 0);
}

function getDoanhThu7Ngay() {
    const today = new Date();
    const days7Ago = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
    return window.DB.hoaDonBanLe
        .filter(hd => new Date(hd.ngayBan) >= days7Ago)
        .reduce((sum, hd) => sum + hd.tongTien, 0);
}

function renderStockDistribution() {
    const nhomThuoc = ['Kháng sinh', 'Vitamin', 'Giảm đau', 'Tiêu hoá'];
    const colors = ['bg-primary', 'bg-green-500', 'bg-orange-400', 'bg-purple-500'];
    const percentages = [70, 45, 20, 15];
    
    return nhomThuoc.map((nhom, i) => `
        <div class="flex items-center gap-4">
            <div class="w-full bg-[#f0f2f4] rounded-full h-3 overflow-hidden">
                <div class="${colors[i]} h-full rounded-full" style="width: ${percentages[i]}%"></div>
            </div>
            <div class="min-w-[80px]">
                <p class="text-xs text-[#617589]">${nhom}</p>
                <p class="text-sm font-bold">${percentages[i]}%</p>
            </div>
        </div>
    `).join('');
}

function renderWarningTable() {
    const warnings = [
        ...getSapHetHan().slice(0, 2),
        ...getSapHetHang().slice(0, 2)
    ];
    
    if (warnings.length === 0) {
        return '<div class="text-center py-10 text-gray-500">Không có cảnh báo</div>';
    }

    return `
        <div class="bg-white rounded-xl border border-[#dbe0e6] shadow-sm overflow-hidden">
            <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse min-w-[800px]">
                    <thead>
                        <tr class="bg-[#f8fafc] border-b border-[#dbe0e6]">
                            <th class="p-4 text-xs font-semibold uppercase text-[#617589]">Tên thuốc</th>
                            <th class="p-4 text-xs font-semibold uppercase text-[#617589]">Số lô</th>
                            <th class="p-4 text-xs font-semibold uppercase text-[#617589]">Hạn dùng / Tồn</th>
                            <th class="p-4 text-xs font-semibold uppercase text-[#617589]">Trạng thái</th>
                            <th class="p-4 text-xs font-semibold uppercase text-[#617589] text-right">Hành động</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-[#f0f2f4]">
                        ${warnings.map(thuoc => `
                            <tr class="hover:bg-[#f8fafc] transition-colors">
                                <td class="p-4">
                                    <div class="flex flex-col">
                                        <span class="text-[#111418] text-sm font-medium">${thuoc.tenThuoc}</span>
                                        <span class="text-[#617589] text-xs">${thuoc.donViTinh}</span>
                                    </div>
                                </td>
                                <td class="p-4 text-sm text-[#111418]">${thuoc.soLo}</td>
                                <td class="p-4">
                                    <div class="flex flex-col">
                                        <span class="text-red-600 text-sm font-bold">${thuoc.hanSuDung}</span>
                                        <span class="text-[#617589] text-xs">Tồn: ${thuoc.tonKho}</span>
                                    </div>
                                </td>
                                <td class="p-4">
                                    <span class="inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-1 text-xs font-medium text-red-700">
                                        ${thuoc.tonKho <= thuoc.dinhmucToiThieu ? 'Sắp hết hàng' : 'Sắp hết hạn'}
                                    </span>
                                </td>
                                <td class="p-4 text-right">
                                    <button class="text-primary hover:text-blue-700 text-sm font-medium bg-blue-50 px-3 py-1.5 rounded-lg">
                                        Kiểm tra
                                    </button>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

function renderDanhSachThuoc() {
    return `
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <table class="w-full">
                <thead class="bg-gray-50 border-b">
                    <tr>
                        <th class="p-4 text-left text-xs font-semibold uppercase text-gray-600">Mã thuốc</th>
                        <th class="p-4 text-left text-xs font-semibold uppercase text-gray-600">Tên thuốc</th>
                        <th class="p-4 text-left text-xs font-semibold uppercase text-gray-600">Nhóm</th>
                        <th class="p-4 text-right text-xs font-semibold uppercase text-gray-600">Tồn kho</th>
                        <th class="p-4 text-right text-xs font-semibold uppercase text-gray-600">Giá bán</th>
                        <th class="p-4 text-right text-xs font-semibold uppercase text-gray-600">Hành động</th>
                    </tr>
                </thead>
                <tbody class="divide-y">
                    ${window.DB.thuoc.slice(0, 10).map(thuoc => `
                        <tr class="hover:bg-gray-50">
                            <td class="p-4 font-medium text-primary">${thuoc.maThuoc}</td>
                            <td class="p-4">
                                <div class="font-medium">${thuoc.tenThuoc}</div>
                                <div class="text-xs text-gray-500">${thuoc.hoatChat}</div>
                            </td>
                            <td class="p-4 text-sm">${thuoc.nhomThuoc}</td>
                            <td class="p-4 text-right font-semibold">${thuoc.tonKho}</td>
                            <td class="p-4 text-right">${formatCurrency(thuoc.giaBan)}</td>
                            <td class="p-4 text-right">
                                <button class="text-blue-600 hover:text-blue-800">
                                    <span class="material-symbols-outlined">edit</span>
                                </button>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
}

// Router
function navigateTo(pageName) {
    const page = pages[pageName] || pages['dashboard'];
    
    // Update page title
    document.getElementById('page-title').textContent = page.title;
    document.title = `${page.title} - Pharmacy Pro`;
    
    // Update content with fade animation
    const mainContent = document.getElementById('main-content');
    mainContent.style.opacity = '0';
    
    setTimeout(() => {
        mainContent.innerHTML = page.template();
        mainContent.className = 'flex-1 overflow-y-auto bg-background-light p-4 md:p-6 page-transition';
        mainContent.style.opacity = '1';
    }, 150);
    
    // Update active menu item
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('bg-primary/10', 'text-primary');
        link.querySelector('.material-symbols-outlined')?.classList.remove('text-primary');
    });
    
    const activeLink = document.querySelector(`[href="#${pageName}"]`);
    if (activeLink) {
        activeLink.classList.add('bg-primary/10', 'text-primary');
        activeLink.querySelector('.material-symbols-outlined')?.classList.add('text-primary');
    }
}

// Initialize
function init() {
    // Handle hash changes
    window.addEventListener('hashchange', () => {
        const hash = window.location.hash.slice(1) || 'dashboard';
        navigateTo(hash);
    });
    
    // Handle navigation clicks
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageName = link.getAttribute('href').slice(1);
            window.location.hash = pageName;
        });
    });
    
    // Load initial page
    const initialPage = window.location.hash.slice(1) || 'dashboard';
    navigateTo(initialPage);
}

// Start app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}