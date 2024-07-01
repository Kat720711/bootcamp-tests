function mostProfitableDepartment(salesData) {
    let department;
    let Departments = [];
    let DepartmentSale = 0;
    let highSale = 0;

    for (let mysales of salesData) {
        if (!Departments.includes(mysales.department)) {
            Departments.push(mysales.department);
        }
    };

    for (let i = 0; i < Departments.length; i++) {
        for (let mysales of salesData) {
            if (Departments[i] === mysales.department) {
                DepartmentSale += mysales.sales;
            }
        };

        if (DepartmentSale >= highSale) {
            highSale = DepartmentSale;
            department = Departments[i];
        }

        DepartmentSale = 0;
    }

    return department;
};