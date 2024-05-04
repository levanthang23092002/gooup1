const organizationTree = {
  name: "CEO",
  children: [
    {
      name: "CFO",
      children: [
        {
          name: "Finance Manager",
          children: [
            { name: "Senior Accountant" },
            { name: "Junior Accountant" },
          ],
        },
        {
          name: "Investment Manager",
          children: [
            { name: "Financial Analyst I" },
            { name: "Financial Analyst II" },
          ],
        },
      ],
    },
    {
      name: "CTO",
      children: [
        {
          name: "Engineering Manager",
          children: [
            { name: "Lead Developer" },
            { name: "Senior Developer" },
            { name: "Junior Developer" },
          ],
        },
        {
          name: "QA Manager",
          children: [
            { name: "Lead QA Engineer" },
            { name: "QA Engineer I" },
            { name: "QA Engineer II" },
          ],
        },
      ],
    },
    {
      name: "COO",
      children: [
        {
          name: "Operations Manager",
          children: [{ name: "HR Manager" }, { name: "Office Coordinator" }],
        },
        {
          name: "Customer Relations Manager",
          children: [
            { name: "Customer Support Specialist I" },
            { name: "Customer Support Specialist II" },
          ],
        },
      ],
    },
  ],
};
 
// we want to convert it to the flat list like this:

// const flatList = [
//   {
//     id: 1,
//     name: "CEO",
//     position: "CEO",
//     parentId: null,
//   },
//   {
//     id: 2,
//     name: "CFO",
//     position: "CFO > CEO",
//     parentId: 1,
//   },
//   {
//     id: 3,
//     name: "Finance Manager",
//     position: "Finance Manager > CFO > CEO",
//     parentId: 2,
//   },
//   {
//     id: 4,
//     name: "Senior Accountant",
//     position: "Senior Accountant > Finance Manager > CFO > CEO",
//     parentId: 3,
//   },
//   {
//     id: 5,
//     name: "Junior Accountant",
//     position: "Junior Accountant > Finance Manager > CFO > CEO",
//     parentId: 3,
//   },
//   {
//     id: 6,
//     name: "Investment Manager",
//     position: "Investment Manager > CFO > CEO",
//     parentId: 2,
//   },
//   {
//     id: 7,
//     name: "Financial Analyst I",
//     position: "Financial Analyst I > Investment Manager > CFO > CEO",
//     parentId: 6,
//   },
//   {
//     id: 8,
//     name: "Financial Analyst II",
//     position: "Financial Analyst II > Investment Manager > CFO > CEO",
//     parentId: 6,
//   },
//   {
//     id: 9,
//     name: "CTO",
//     position: "CTO > CEO",
//     parentId: 1,
//   },
//   {
//     id: 10,
//     name: "Engineering Manager",
//     position: "Engineering Manager > CTO > CEO",
//     parentId: 9,
//   },
//   {
//     id: 11,
//     name: "Lead Developer",
//     position: "Lead Developer > Engineering Manager > CTO > CEO",
//     parentId: 10,
//   },
//   {
//     id: 12,
//     name: "Senior Developer",
//     position: "Senior Developer > Engineering Manager > CTO > CEO",
//     parentId: 10,
//   },
//   {
//     id: 13,
//     name: "Junior Developer",
//     position: "Junior Developer > Engineering Manager > CTO > CEO",
//     parentId: 10,
//   },
//   {
//     id: 14,
//     name: "QA Manager",
//     position: "QA Manager > CTO > CEO",
//     parentId: 9,
//   },
//   {
//     id: 15,
//     name: "Lead QA Engineer",
//     position: "Lead QA Engineer > QA Manager > CTO > CEO",
//     parentId: 14,
//   },
//   {
//     id: 16,
//     name: "QA Engineer I",
//     position: "QA Engineer I > QA Manager > CTO > CEO",
//     parentId: 14,
//   },
//   {
//     id: 17,
//     name: "QA Engineer II",
//     position: "QA Engineer II > QA Manager > CTO > CEO",
//     parentId: 14,
//   },
//   {
//     id: 18,
//     name: "COO",
//     position: "COO > CEO",
//     parentId: 1,
//   },
//   {
//     id: 19,
//     name: "Operations Manager",
//     position: "Operations Manager > COO > CEO",
//     parentId: 18,
//   },
//   {
//     id: 20,
//     name: "HR Manager",
//     position: "HR Manager > Operations Manager > COO > CEO",
//     parentId: 19,
//   },
//   {
//     id: 21,
//     name: "Office Coordinator",
//     position: "Office Coordinator > Operations Manager > COO > CEO",
//     parentId: 19,
//   },
//   {
//     id: 22,
//     name: "Customer Relations Manager",
//     position: "Customer Relations Manager > COO > CEO",
//     parentId: 18,
//   },
//   {
//     id: 23,
//     name: "Customer Support Specialist I",
//     position:
//       "Customer Support Specialist I > Customer Relations Manager > COO > CEO",
//     parentId: 22,
//   },
//   {
//     id: 24,
//     name: "Customer Support Specialist II",
//     position:
//       "Customer Support Specialist II > Customer Relations Manager > COO > CEO",
//     parentId: 22,
//   },
// ];






function listTree(node, parentPosition = "", result = []){
    if(parentPosition === "")
      var position = node.name;
    else
      var position = parentPosition + " > "+node.name;

    if(parentPosition === "")
      var parentId = null;
    else
      var parentId = result.find((i) => i.position === parentPosition).id;
    const item = {
      id: result.length + 1,
      name: node.name,
      position: position,
      parentId :parentId
    };
    result.push(item);
  
    if (node.children) {
      node.children.forEach((child) => {
        listTree(child, position, result);
      });
    }
  }
  
  const flatList = [];
  listTree(organizationTree, "", flatList);
  console.log(flatList);


